import nodemailer from 'nodemailer'
import { Resend } from 'resend'

export interface MailOptions {
  from: string
  to: string
  replyTo?: string
  subject: string
  text: string
  html: string
}

/**
 * Creates a configured nodemailer transporter from environment variables.
 * Used as a fallback when no Resend API key is configured.
 */
function createSmtpTransporter() {
  return nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_EMAIL_HOST || 'smtp.example.com',
    port: parseInt(process.env.NEXT_PUBLIC_EMAIL_PORT || '587'),
    secure: process.env.NEXT_PUBLIC_EMAIL_SECURE === 'true',
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER || 'your-email@example.com',
      pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD || 'your-password',
    },
  })
}

/**
 * Sends an email. Prefers the Resend HTTP API when `RESEND_API_KEY` is set
 * (recommended for production — avoids SMTP auth restrictions). Falls back to
 * SMTP via nodemailer otherwise. Throws on failure so callers can report it.
 */
export async function sendMail(options: MailOptions): Promise<void> {
  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: options.from,
      to: options.to.split(',').map(address => address.trim()),
      replyTo: options.replyTo,
      subject: options.subject,
      text: options.text,
      html: options.html,
    })

    if (error) {
      throw new Error(error.message || 'Resend failed to send the email')
    }
    return
  }

  const transporter = createSmtpTransporter()
  await transporter.sendMail(options)
}
