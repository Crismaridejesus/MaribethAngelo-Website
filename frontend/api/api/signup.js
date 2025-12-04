// api/signup.js
import { connectDB } from "./db.js";
import User from "./models/users.js";
import nodemailer from "nodemailer";

const allowedOrigins = [
	"http://localhost:5173", // local dev frontend
	"https://maribeth-angelo-business-website-in.vercel.app", // replace with your deployed frontend URL
];

export default async function handler(req, res) {
	const origin = req.headers.origin;
	if (allowedOrigins.includes(origin)) {
		res.setHeader("Access-Control-Allow-Origin", origin);
	}
	res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");

	if (req.method === "OPTIONS") {
		return res.status(200).end();
	}

	if (req.method !== "POST") {
		return res.status(405).json({ message: "Only POST requests allowed" });
	}

	try {
		const { name, email } = req.body;
		console.log("📥 Received signup:", { name, email });

		// Connect to MongoDB
		await connectDB();

		// Save user
		const newUser = new User({ name, email });
		await newUser.save();

		// Send email
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.MAIL_USER,
				pass: process.env.MAIL_PASS,
			},
		});

		await transporter.sendMail({
			from: `"BDO" <${process.env.MAIL_USER}>`,
			to: email,
			subject: "Welcome to Maribeth & Anghelo Business Community 🎉",
			html: `<h1>Hello ${name},</h1>
<p>🎉 Welcome to our community! 🎉</p>
<p>Thank you for signing up and showing interest in our online business. 
You're now on the path to discovering exciting opportunities, updates, and tips that can help you grow and succeed.</p>
<p>We’re thrilled to have you with us. Stay tuned for valuable insights and exclusive content designed just for you!</p>
<br>
<p>Cheers,</p>
<p><strong>Maribeth and Anghelo Team</strong></p>`,
		});

		return res.status(201).json({ message: "User saved and email sent" });
	} catch (err) {
		console.error("❌ Signup failed:", err);
		return res.status(500).json({ message: "Signup Failed", error: err.message });
	}
}
