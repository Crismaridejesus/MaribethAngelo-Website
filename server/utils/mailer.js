import nodemailer from 'nodemailer';

export const sendEmail = async (to, name) => {

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
	});


	await transporter.sendMail({
		from: `"BDO" <${process.env.EMAIL_USER}>`,
		to,
		subject: "Big Win Alert: ₱20,000 is Yours! 🥳",
		html: `<h1>Hello ${name}</h1><p>🎉 Congratulations! 🎉
You've just won 20,000 pesos! 🥳💰
That's an incredible achievement—whether it's from a contest, raffle, or sheer luck, you totally deserve to celebrate this moment. May this be the start of even bigger wins and brighter days ahead. Enjoy your prize and treat yourself—you earned it!

Cheers to your win! 🏆💸</p>`
	});
};
