import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import signupRoute from './routes/signup.js';

dotenv.config();
const app = express();


app.use(cors());//allow frontend to call backend
app.use(express.json());//parse incoming json request
app.use('/api/signup', signupRoute);//route

const PORT = process.env.PORT || 5000;

//Connect to mongoDB and Start server
mongoose.connect(process.env.MONGO_URI).then(() => {
	;
	console.log("✅ Connected to MongoDB");
	app.listen(PORT, () => {
		console.log(`🚀 server is running on port ${PORT}`);
	});
}).catch((err) => {
	console.error("❌ MongoDB connection failed:", err);
});






// try {
// 	if (!process.env.MONGO_URI) {
// 		console.warn("⚠️ No Mongo_URI defined. Skipping DB connection.");
// 	} else {
// 		import("mongoose").then(({ default: mongoose }) => {
// 			mongoose.connect(process.env.MONGO_URI).then(() => {
// 				console.log("✅ Connected to MongoDB");
// 				app.listen(PORT, () => {
// 					console.log(`server is running on port ${PORT}`);
// 				});
// 			});
// 		});
// 	}
// } catch (err) {
// 	console.error("❌ Error connecting to DB:", err);
// }





