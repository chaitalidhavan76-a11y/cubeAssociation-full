import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import loanRoutes from "./routes/loanRoute.js";
import contactRoutes from "./routes/contactRoute.js"; 
import adminRoutes from "./routes/adminRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas connected"))
  .catch(err => console.log("DB connection error:", err));


app.use("/api/loans", loanRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes); 
app.use("/api/dashboard", dashboardRoutes);




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
