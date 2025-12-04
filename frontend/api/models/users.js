// api/models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	createdAt: {
		type: Date,
		default: Date.now,
		expires: 60 * 60 * 24 * 90, // auto delete after 90 days
	},
});

// Prevent model overwrite in Vercel serverless environment
export default mongoose.models.User || mongoose.model("User", userSchema);
