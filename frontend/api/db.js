// api/db.js
import mongoose from "mongoose";

let isConnected = false; // track connection status across function invocations

export const connectDB = async () => {
	if (isConnected) return;

	if (!process.env.MONGO_URI) {
		throw new Error("Missing MONGO_URI in environment variables");
	}

	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		isConnected = true;
		console.log("✅ MongoDB connected");
	} catch (err) {
		console.error("❌ MongoDB connection failed:", err);
		throw err;
	}
};
