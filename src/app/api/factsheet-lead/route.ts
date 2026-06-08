// src/app/api/factsheet-lead/route.ts
import { NextResponse } from 'next/server'
import { createMailTransporter } from '@/lib/mailer'
import { isValidEmail } from '@/lib/validation'

interface FactsheetLeadRequest {
  firstName: string
  lastName: string
  email: string
  phone: string
}

export async function POST(request: Request) {
  try {
    const body: FactsheetLeadRequest = await request.json()
    const { firstName, lastName, email, phone } = body

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

    const transporter = createMailTransporter()

    const fullName = `${firstName} ${lastName}`
    const mailOptions = {
      from: `"SLMC Factsheet Download" <${
        process.env.NEXT_PUBLIC_EMAIL_FROM || 'contact@slmc.ch'
      }>`,
      to: process.env.NEXT_PUBLIC_EMAIL_TO || 'info@slmc.ch',
      replyTo: email,
      subject: `Factsheet Download Lead: ${fullName}`,
      text: `
A visitor downloaded the SLMC factsheet.

First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}
Phone: ${phone}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #333;">New Factsheet Download Lead</h2>
  <p><strong>First Name:</strong> ${firstName}</p>
  <p><strong>Last Name:</strong> ${lastName}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Phone:</strong> ${phone}</p>
  <p style="margin-top: 20px; color: #777; font-size: 12px;">This lead was captured from the SLMC website factsheet download form.</p>
</div>
      `,
    }

    if (
      process.env.NODE_ENV === 'development' &&
      process.env.NEXT_PUBLIC_EMAIL_TEST === 'true'
    ) {
      console.log('Factsheet lead would be sent with:', mailOptions)
      return NextResponse.json({
        message: 'Lead logged successfully (development mode)',
      })
    }

    // The lead email is a nice-to-have notification. A mailer outage should
    // never block the visitor from getting the factsheet they requested, so we
    // attempt delivery but still return success if it fails.
    try {
      await transporter.sendMail(mailOptions)
    } catch (mailError) {
      console.error('Factsheet lead email failed to send:', mailError)
      return NextResponse.json({
        message: 'Lead recorded; notification email could not be sent.',
      })
    }

    return NextResponse.json({ message: 'Lead captured successfully' })
  } catch (error) {
    console.error('Error capturing factsheet lead:', error)
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again later.' },
      { status: 500 },
    )
  }
}
