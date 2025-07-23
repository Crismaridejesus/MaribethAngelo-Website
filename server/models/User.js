import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	createdAt: {
		type: Date,
		default: Date.now,
		expires: 60 * 60 * 24 * 90,//Auto delete after 90 days
	},
});

export default mongoose.model('User', userSchema);
