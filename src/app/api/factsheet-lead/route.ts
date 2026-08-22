// src/app/api/factsheet-lead/route.ts
import { NextResponse } from 'next/server'
import { sendMail } from '@/lib/mailer'
import { isValidEmail } from '@/lib/validation'

interface FactsheetLeadRequest {
  firstName: string
  lastName: string
  email: string
  phone: string
  /** Title of the document that was unlocked. Optional for older clients. */
  document?: string
}

export async function POST(request: Request) {
  try {
    const body: FactsheetLeadRequest = await request.json()
    const { firstName, lastName, email, phone } = body
    const documentName = body.document?.trim() || 'SLMC Factsheet'

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 },
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 },
      )
    }

    const fullName = `${firstName} ${lastName}`
    const mailOptions = {
      // The "from" address MUST be on the Resend-verified domain (slmc.ch).
      from: `SLMC Document Download <${
        process.env.EMAIL_FROM || 'noreply@slmc.ch'
      }>`,
      to:
        process.env.EMAIL_TO ||
        process.env.NEXT_PUBLIC_EMAIL_TO ||
        'info@slmc.ch',
      replyTo: email,
      subject: `Download Lead: ${fullName} — ${documentName}`,
      text: `
A visitor downloaded a document from the SLMC website.

Document: ${documentName}
First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}
Phone: ${phone}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #333;">New Download Lead</h2>
  <p><strong>Document:</strong> ${documentName}</p>
  <p><strong>First Name:</strong> ${firstName}</p>
  <p><strong>Last Name:</strong> ${lastName}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Phone:</strong> ${phone}</p>
  <p style="margin-top: 20px; color: #777; font-size: 12px;">This lead was captured from a download form on the SLMC website.</p>
</div>
      `,
    }

    // For development or testing, log the email instead of sending it
    if (
      process.env.NODE_ENV === 'development' &&
      process.env.NEXT_PUBLIC_EMAIL_TEST === 'true'
    ) {
      console.log('Factsheet lead would be sent with:', mailOptions)
      return NextResponse.json({
        message: 'Lead logged successfully (development mode)',
      })
    }

    // Send the email (same logic as the contact form route)
    await sendMail(mailOptions)

    return NextResponse.json({ message: 'Lead captured successfully' })
  } catch (error) {
    console.error('Error capturing factsheet lead:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 },
    )
  }
}
