// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Import routes
import authRoutes from "./routes/authRoutes.js"; // 👈 new route

dotenv.config();
const app = express();

// Middleware
app.use(express.json()); // parse JSON request bodies
app.use(cors()); // allow frontend requests

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.log("❌ MongoDB connection error:", err));

// =======================
// 💬 Message (Contact) Model
// =======================
const messageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    subject: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

// =======================
// 🌐 Routes
// =======================

// Test route
app.get("/", (req, res) => {
  res.send("EduVision Backend is running 🚀");
});

// 📩 Contact form route
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newMessage = new Message({ name, email, subject, message });
    await newMessage.save();

    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// 🧭 Auth routes (Sign Up / Sign In)
app.use("/api/auth", authRoutes); // 👈 This connects /api/auth/signup & /api/auth/signin

// =======================
// 🚀 Start Server
// =======================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
