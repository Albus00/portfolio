import { json } from '@sveltejs/kit';
import { Resend } from 'resend';
import { RESEND_KEY } from '$env/static/private';
import type { RequestHandler } from './$types';

const resend = new Resend(RESEND_KEY);

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return json({ error: 'All fields are required' }, { status: 400 });
    }

    const response = await resend.emails.send({
      from: "Contact <portfolio@kjellbergalbin.se>",
      to: "hello@kjellbergalbin.se",
      // to: "albin.kjellberg2000@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      text: `You have received a new message from your website contact form.
    
    Name: ${name}
    Email: ${email}
    
    Message:
    ${message}
    
    ---
    This email was automatically generated. Please do not reply to this address.`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #0056b3;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #0056b3;">${email}</a></p>
          <p><strong>Message:</strong></p>
          <p style="background: #f4f4f4; padding: 10px; border-radius: 5px;">${message}</p>
          <hr>
          <p style="font-size: 0.9em; color: #666;">This email was automatically generated. Please do not reply.</p>
        </div>
      `
    });

    return json({ success: true, response });
  } catch (error) {
    return json({ error: 'Failed to send email' }, { status: 500 });
  }
}
