import express from "express";
import Contact from "../models/contact.js";

const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const { name, email, number, loan, message } = req.body;

    if (!name || !email || !number || !loan || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newContact = new Contact({ name, email, number, loan, message });
    await newContact.save();

    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error, please try again later." });
  }
});

export default router;
