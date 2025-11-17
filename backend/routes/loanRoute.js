import express from "express";
import Loan from "../models/loanModel.js";

const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const loanData = new Loan(req.body);
    await loanData.save();
    res.status(201).json({ message: "Loan application submitted successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get("/", async (req, res) => {
  try {
    const apps = await Loan.find().sort({ createdAt: -1 });
    res.json(apps);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching applications" });
  }
});

export default router;
