// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'darlene@fensterfarm.com',
      subject: `New Contact Form Submission: ${subject}`,
      text: `
    Name: ${name}
    Email: ${email}
    Message: ${message}
  `,
      html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
      <header style="text-align: center; padding: 20px 0; border-bottom: 2px solid #4caf93;">
        <h1 style="color: #4caf93; font-size: 24px; margin: 0;">Fenster Farm</h1>
        <p style="font-size: 16px; color: #555;">New Contact Form Submission</p>
      </header>
      
      <section style="padding: 20px;">
        <h2 style="font-size: 20px; color: #333; margin-bottom: 10px;">Contact Details</h2>
        <p style="margin: 0; font-size: 16px; color: #333;"><strong>Name:</strong> ${name}</p>
        <p style="margin: 0; font-size: 16px; color: #333;"><strong>Email:</strong> ${email}</p>
      </section>

      <section style="padding: 20px; background-color: #f9f9f9; border-radius: 5px;">
        <h2 style="font-size: 20px; color: #333; margin-bottom: 10px;">Message</h2>
        <p style="font-size: 16px; color: #333; white-space: pre-wrap; margin: 0;">${message}</p>
      </section>

      <footer style="text-align: center; padding: 20px; color: #888; font-size: 14px; border-top: 1px solid #e0e0e0;">
        <p style="margin: 0;">Fenster Farm | <a href="https://fensterfarm.com" style="color: #4caf93; text-decoration: none;">fensterfarm.com</a></p>
      </footer>
    </div>
  `,
    }

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Nodemailer Error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
