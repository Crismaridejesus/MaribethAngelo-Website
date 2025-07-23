import express from 'express';
import User from '../models/User.js';
import { sendEmail } from '../utils/mailer.js';

const router = express.Router();
router.post('/', async (req, res) => {
	const { name, email } = req.body;

	try {
		console.log("📥 Received signup:", { name, email });
		const newUser = new User({ name, email });
		await newUser.save();

		await sendEmail(email, name);
		res.status(201).json({ message: 'User saved and email sent' });
	}

	catch (err) {
		res.status(500).json({ message: "Signup Failed", error: err });
	}
});

export default router;

