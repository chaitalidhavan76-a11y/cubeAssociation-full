import React, { useState } from "react";
import { VscTriangleRight } from "react-icons/vsc";
import { Link } from "react-router-dom";

const LoanCalculator = () => {
  const [amount, setAmount] = useState(10000);
  const [months, setMonths] = useState(3);
  const [interest, setInterest] = useState(0.5);


  const monthlyInterest = interest / 12 / 100;
  const emi =
    (amount * monthlyInterest * Math.pow(1 + monthlyInterest, months)) /
    (Math.pow(1 + monthlyInterest, months) - 1);
  const totalPayable = emi * months;
  const totalInterest = totalPayable - amount;


  const amountPercent = ((amount - 10000) / (10000000 - 10000)) * 100;
  const monthsPercent = ((months - 3) / (240 - 3)) * 100;
  const interestPercent = ((interest - 0.5) / (25 - 0.5)) * 100;

  return (
    <section className="loan-section">
      <div className="loan-container">

        <div className="loan-left">
          <h2 className="loan-title">
            <VscTriangleRight className="loan-icon" /> Loan Cost Summary
          </h2>


          <div className="loan-field">
            <label>Loan Amount</label>
            <h3>₹ {amount.toLocaleString()}</h3>
            <input
              type="range"
              min="10000"
              max="10000000"
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              className="slider"
              style={{ "--value-percent": `${amountPercent}%` }}
            />
            <div className="range-labels">
              <span>₹10,000</span>
              <span>₹1,00,000,00</span>
            </div>
          </div>


          <div className="loan-field">
            <label>Loan Months</label>
            <h3>{months} Months</h3>
            <input
              type="range"
              min="3"
              max="240"
              value={months}
              onChange={(e) => setMonths(parseInt(e.target.value))}
              className="slider"
              style={{ "--value-percent": `${monthsPercent}%` }}
            />
            <div className="range-labels">
              <span>3</span>
              <span>240</span>
            </div>
          </div>


          <div className="loan-field">
            <label>Interest Rate</label>
            <h3>{interest}%</h3>
            <input
              type="range"
              min="0.5"
              max="25"
              step="0.1"
              value={interest}
              onChange={(e) => setInterest(parseFloat(e.target.value))}
              className="slider interest-slider"
              style={{ "--value-percent": `${interestPercent}%` }}
            />
            <div className="range-labels">
              <span>0.5%</span>
              <span>25%</span>
            </div>
          </div>
        </div>


        <div className="loan-summary">
          <div className="summary-card">
            <h3>Future Goal Summary</h3>
            <div className="summary-item">
              <p>Monthly EMI:</p>
              <span>₹{emi.toFixed(0)}</span>
            </div>
            <div className="summary-item">
              <p>Total Interest:</p>
              <span>₹{totalInterest.toFixed(0)}</span>
            </div>
            <div className="summary-item">
              <p>Total Amount Payable:</p>
              <span>₹{totalPayable.toFixed(0)}</span>
            </div>
          </div>

          <div className="summary-footer">
            <Link to='/ApplyLoan'><button className="apply-btn">Apply for Loan</button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanCalculator;
