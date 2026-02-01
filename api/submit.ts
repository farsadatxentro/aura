import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

// NOTE: Ensure these environment variables are set in your Vercel project settings:
// MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS, MAIL_FROM, MAIL_TO, APP_NAME
// -------------------------------------

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { roomNumber, requestType, details, language } = req.body;

    // Validate required fields
    if (!roomNumber || !requestType) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const appName = process.env.APP_NAME || "Aura Guest Experience";

    // Configure Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT) || 587,
      secure: process.env.MAIL_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const refId = '#' + Math.random().toString(36).substring(2, 7).toUpperCase();

    const mailOptions = {
      from: process.env.MAIL_FROM || process.env.MAIL_USER,
      to: process.env.MAIL_TO || process.env.MAIL_USER,
      replyTo: process.env.MAIL_REPLY_TO,
      subject: `🛎️ New Request: Room ${roomNumber} (${requestType})`,
      text: `
New Guest Request received from ${appName}.

----------------------------------------
REF:      ${refId}
ROOM:     ${roomNumber}
TYPE:     ${requestType}
LANGUAGE: ${language}
----------------------------------------

DETAILS:
${details || 'No additional details provided.'}

----------------------------------------
Sent via ${appName}
      `,
    };

    // Send Email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, refId });

  } catch (error: any) {
    console.error('API Error:', error);
    return res.status(500).json({
      error: 'Failed to send request',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}