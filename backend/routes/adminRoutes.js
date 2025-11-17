import express from "express";
import Admin from "../models/admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { protect } from "../middleware/auth.js";

const router = express.Router();

/* ---------------------------
   ADMIN REGISTER (ONE-TIME)
---------------------------- */
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    const existing = await Admin.findOne({ email });
    if (existing) return res.status(400).json({ msg: "Admin already exists" });

    const admin = new Admin({ email, password });
    await admin.save();

    res.json({ msg: "Admin registered successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

/* ---------------------------
        ADMIN LOGIN
---------------------------- */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(404).json({ msg: "Admin not found" });

    const match = await bcrypt.compare(password, admin.password);
    if (!match) return res.status(401).json({ msg: "Invalid password" });

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({ token, email: admin.email });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

/* ---------------------------
       GET ADMIN PROFILE
---------------------------- */
router.get("/profile", protect, async (req, res) => {
  res.json({
    email: req.admin.email,
  });
});

/* ---------------------------
       UPDATE EMAIL
---------------------------- */
router.put("/update-profile", protect, async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) return res.status(400).json({ msg: "Email required" });

    req.admin.email = email;
    await req.admin.save();

    res.json({ msg: "Profile updated", email });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

/* ---------------------------
       CHANGE PASSWORD
---------------------------- */
router.put("/change-password", protect, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword)
      return res.status(400).json({ msg: "All fields required" });

    const admin = await Admin.findById(req.admin._id);

    const match = await bcrypt.compare(currentPassword, admin.password);
    if (!match) return res.status(401).json({ msg: "Current password wrong" });

    admin.password = newPassword; // will be hashed by pre-save hook
    await admin.save();

    res.json({ msg: "Password updated successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

export default router;
