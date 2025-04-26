// src/app/api/send-email/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Type for the request body
interface EmailRequest {
  fullName: string
  email: string
  subject: string
  message: string
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body: EmailRequest = await request.json()
    const { fullName, email, subject, message } = body

    // Validate required fields
    if (!fullName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 },
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 },
      )
    }

    // Create email transporter
    // For production, use your actual SMTP credentials
    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_EMAIL_HOST || 'smtp.example.com',
      port: parseInt(process.env.NEXT_PUBLIC_EMAIL_PORT || '587'),
      secure: process.env.NEXT_PUBLIC_EMAIL_SECURE === 'true',
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER || 'your-email@example.com',
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD || 'your-password',
      },
    })

    // Configure email content
    const mailOptions = {
      from: `"SLMC Contact Form" <${
        process.env.NEXT_PUBLIC_EMAIL_FROM || 'contact@slmc.ch'
      }>`,
      to: process.env.NEXT_PUBLIC_EMAIL_TO || 'info@slmc.ch',
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: `
Name: ${fullName}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #333;">New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${fullName}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Subject:</strong> ${subject}</p>
  <div style="margin-top: 20px;">
    <p><strong>Message:</strong></p>
    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 4px;">
      ${message.replace(/\n/g, '<br>')}
    </div>
  </div>
  <p style="margin-top: 20px; color: #777; font-size: 12px;">This email was sent from the SLMC website contact form.</p>
</div>
      `,
    }

    // For development or testing, log the email instead of sending it
    if (
      process.env.NODE_ENV === 'development' &&
      process.env.NEXT_PUBLIC_EMAIL_TEST === 'true'
    ) {
      console.log('Email would be sent with:', mailOptions)
      return NextResponse.json({
        message: 'Email logged successfully (development mode)',
      })
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 },
    )
  }
}
