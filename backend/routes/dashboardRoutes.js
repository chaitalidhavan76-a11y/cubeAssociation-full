import express from "express";
import Loan from "../models/loanModel.js";
import Contact from "../models/contact.js";

const router = express.Router();


// ----------------------------
// DASHBOARD STATS
// ----------------------------
router.get("/stats", async (req, res) => {
  try {
    const totalApplications = await Loan.countDocuments();
    const totalContacts = await Contact.countDocuments();

    // New applications – last 24 hours
    const since = new Date();
    since.setHours(since.getHours() - 24);

    const newApplications = await Loan.countDocuments({
      createdAt: { $gte: since },
    });

    // Recent 5 loan applications
    const recentApplications = await Loan.find()
      .sort({ createdAt: -1 })
      .limit(5);

    // Recent 5 contact form queries
    const recentQueries = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(5);

    res.json({
      totalApplications,
      totalContacts,
      newApplications,
      recentApplications,
      recentQueries,
    });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});


// ----------------------------
// ALL APPLICATIONS
// ----------------------------
router.get("/applications", async (req, res) => {
  try {
    const apps = await Loan.find().sort({ createdAt: -1 });
    res.json(apps);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});


// ----------------------------
// ALL CONTACT QUERIES
// ----------------------------
router.get("/queries", async (req, res) => {
  try {
    const queries = await Contact.find().sort({ createdAt: -1 });
    res.json(queries);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

export default router;
