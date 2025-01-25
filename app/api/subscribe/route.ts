import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()
    const companyEmail = process.env.SMTP_TO // Your company's email

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // Hostinger SMTP host
      port: Number(process.env.SMTP_PORT), // Hostinger SMTP port
      secure: true, // Use SSL
      auth: {
        user: process.env.SMTP_USER, // Hostinger email
        pass: process.env.SMTP_PASSWORD, // Hostinger email password
      },
    })

    // Email to subscriber
    const subscriberMailOptions = {
      from: companyEmail,
      to: email,
      subject: 'Welcome to Paradise Golf Tours Newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2E7D32;">Welcome to Paradise Golf Tours!</h2>
          <p>Thank you for subscribing to our newsletter. You'll receive:</p>
          <ul>
            <li>Exclusive travel tips</li>
            <li>Special offers and discounts</li>
            <li>Destination inspiration</li>
            <li>Latest updates from our golf courses</li>
          </ul>
          <p>Stay tuned for our next update!</p>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
            <p>Best regards,<br>Paradise Golf Tours Team</p>
            <p style="color: #666; font-size: 12px;">Sri Lanka</p>
          </div>
        </div>
      `,
    }

    // Email to company
    const companyMailOptions = {
      from: companyEmail,
      to: companyEmail,
      subject: 'New Newsletter Subscription',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2E7D32;">New Newsletter Subscriber</h2>
          <p>A new user has subscribed to the Paradise Golf Tours newsletter.</p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            <p><strong>Subscriber Email:</strong> ${email}</p>
            <p><strong>Date Subscribed:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    }

    // Send both emails
    await Promise.all([
      transporter.sendMail(subscriberMailOptions),
      transporter.sendMail(companyMailOptions),
    ])

    return NextResponse.json({
      message: 'Subscription successful! Please check your email.',
    })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    )
  }
}
