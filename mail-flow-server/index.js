import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import nodemailer from 'nodemailer';
import { Agenda } from "@hokify/agenda";
dotenv.config();


mongoose.connect(process.env.DBURI)
  .then(() => console.log('Connected To DB'))
  .catch((e) => console.log(e));

const app = express();
app.use(express.json());
app.use(cookieParser());

const transporter = nodemailer.createTransport({
    service: "gmail",
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

const agenda = new Agenda({ mongo: mongoose.connection });

agenda.define('send_email', async (job) => {
  const { time, emailBody, subject, emailAddress } = job.attrs.data;

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: emailAddress,
    subject,
    text: emailBody,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${emailAddress} at ${time}`);
  } catch (error) {
    console.error('Error sending email:', error);
  }
});

app.post('/api/schedule-email', async (req, res) => {
  try {
    const { time, emailBody, subject, emailAddress } = req.body;

    // Validate input
    if (!time || !emailBody || !subject || !emailAddress) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Log request body
    console.log('Request body:', req.body);

    await agenda.schedule(time, 'send_email', { time, emailBody, subject, emailAddress });

    res.json({ message: 'Email scheduled successfully!' });
  } catch (error) {
    console.error('Error scheduling email:', error);
    res.status(500).json({ message: 'Error scheduling email' });
  }
});

app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(status).json({ success: false, statusCode: status, message });
});

app.listen(3000, () => console.log('Server started'));

agenda.start();
