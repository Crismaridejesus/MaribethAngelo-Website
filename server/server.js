import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import signupRoute from './routes/signup.js';

dotenv.config();
const app = express();


import cors from "cors";

const allowedOrigins = [
	"https://maribeth-angelo-business-introduction-website-email-1np23fuzo.vercel.app", // replace with your frontend deployment URL
];

app.use(
	cors({
		origin: function (origin, callback) {
			// allow requests with no origin (like Postman)
			if (!origin) return callback(null, true);
			if (allowedOrigins.indexOf(origin) === -1) {
				const msg = "The CORS policy for this site does not allow access from the specified origin.";
				return callback(new Error(msg), false);
			}
			return callback(null, true);
		},
	})
);

app.use(express.json());//parse incoming json request
app.use('/api/signup', signupRoute);//route

const PORT = process.env.PORT || 5000;

//Connect to mongoDB 
mongoose.connect(process.env.MONGO_URI).then(() => {

	console.log("✅ Connected to MongoDB");
}).catch((err) => {
	console.error("❌ MongoDB connection failed:", err);
});

export default app









