import mongoose from "mongoose";

const loanSchema = new mongoose.Schema({
  loanAmount: { type: String, required: true },
  monthlyIncome: { type: String, required: true },
  purpose: { type: String, required: true },
  loanType: { type: String, required: true },
  tenure: { type: String, required: true },
  applicantName: { type: String, required: true },
  companyName: { type: String, required: true },
  email: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  age: { type: String, required: true },
  incomeSource: { type: String, required: true },
  city: { type: String, required: true },
  pincode: { type: String, required: true }
}, { timestamps: true });

const Loan = mongoose.model("Loan", loanSchema);

export default Loan;
