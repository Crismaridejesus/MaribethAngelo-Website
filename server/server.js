import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import signupRoute from './routes/signup.js';

dotenv.config();
const app = express();


app.use(cors({ origin: "https://maribeth-angelo-business-introducti.vercel.app" }));
app.use(express.json());//parse incoming json request
app.use('/api/signup', signupRoute);//route

const PORT = process.env.PORT || 5000;

//Connect to mongoDB 
mongoose.connect(process.env.MONGO_URI).then(() => {

	console.log("✅ Connected to MongoDB");
}).catch((err) => {
	console.error("❌ MongoDB connection failed:", err);
});

export default app;









