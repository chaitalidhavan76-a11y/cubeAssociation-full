import React, { useState } from "react";
import BannnerApply from "../../assets/images/apply-banner.jpg";
import { FaHome } from "react-icons/fa";
import { VscTriangleRight } from "react-icons/vsc";
import { BiErrorCircle } from "react-icons/bi";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ApplyLoan = () => {
    const [formData, setFormData] = useState({
        loanAmount: "",
        monthlyIncome: "",
        purpose: "",
        loanType: "",
        tenure: "",
        applicantName: "",
        companyName: "",
        email: "",
        mobileNumber: "",
        age: "",
        incomeSource: "",
        city: "",
        pincode: "",
    });

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" }); 
    };

    const validate = () => {
        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                newErrors[key] = `Required ${key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (s) => s.toUpperCase())}`;
            }
        });
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const res = await axios.post("https://win-association-full.onrender.com/api/loans", formData);
            toast.success("Thank you! We've received your loan request and will review it shortly.");
            setFormData({
                loanAmount: "",
                monthlyIncome: "",
                purpose: "",
                loanType: "",
                tenure: "",
                applicantName: "",
                companyName: "",
                email: "",
                mobileNumber: "",
                age: "",
                incomeSource: "",
                city: "",
                pincode: "",
            });
            setErrors({});
        } catch (err) {
            console.error(err);
            toast.error("Submission failed. Please try again.");
        }
    };

    return (

        <>
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                theme="colored"
                style={{
                    zIndex: 99999,      
                    position: "fixed",  
                    marginTop: "90px",  
                }}
            />
            <div
                className="about-ban"
                style={{ backgroundImage: `url(${BannnerApply})` }}
            >
                <div className="overlay"></div>
                <div className="us-container">
                    <div className="banner-content">
                        <FaHome className="breadcrumb-icon" />
                        <span className="breadcrumb-separator">/</span>
                        <span className="breadcrumb-text">Apply Now</span>
                    </div>
                </div>
            </div>

            <section className="main-loan-section">
                <div className="main-loan-container">
                    <div className="main-loan-card">
                        <form className="main-loan-grid" onSubmit={handleSubmit}>
                
                            <div className="main-loan-column">
                                <h5 className="main-loan-subtitle">Calculate your loan amount</h5>
                                <h3 className="main-loan-heading">
                                    <VscTriangleRight className="arrow-icon" /> Loan Details
                                </h3>

                                <div className="main-loan-form">
                                    <label>Loan Amount*</label>
                                    <input
                                        type="text"
                                        name="loanAmount"
                                        placeholder="Enter loan amount"
                                        value={formData.loanAmount}
                                        onChange={handleChange}
                                        className={errors.loanAmount ? "error-input" : ""}
                                    />
                                    {errors.loanAmount && (
                                        <p className="error-text">
                                            <BiErrorCircle /> {errors.loanAmount}
                                        </p>
                                    )}

                                    <label>Monthly Income*</label>
                                    <input
                                        type="text"
                                        name="monthlyIncome"
                                        placeholder="Enter monthly income"
                                        value={formData.monthlyIncome}
                                        onChange={handleChange}
                                        className={errors.monthlyIncome ? "error-input" : ""}
                                    />
                                    {errors.monthlyIncome && (
                                        <p className="error-text">
                                            <BiErrorCircle /> {errors.monthlyIncome}
                                        </p>
                                    )}

                                    <label>Purpose of Loan*</label>
                                    <input
                                        type="text"
                                        name="purpose"
                                        placeholder="Enter purpose of loan"
                                        value={formData.purpose}
                                        onChange={handleChange}
                                        className={errors.purpose ? "error-input" : ""}
                                    />
                                    {errors.purpose && (
                                        <p className="error-text">
                                            <BiErrorCircle /> {errors.purpose}
                                        </p>
                                    )}

                                    <label>Loan Type*</label>
                                    <select
                                        name="loanType"
                                        value={formData.loanType}
                                        onChange={handleChange}
                                        className={errors.loanType ? "error-input" : ""}
                                    >
                                        <option value="">--Select Type--</option>
                                        <option value="Car Loan">Car Loan</option>
                                        <option value="Home Loan">Home Loan</option>
                                        <option value="Business Loan">Business Loan</option>
                                        <option value="Personal Loan">Personal Loan</option>
                                        <option value="Bike Loan">Bike Loan</option>
                                        <option value="Credit Card Loan">Credit Card Loan</option>
                                        <option value="Gold Loan">Gold Loan</option>
                                    </select>
                                    {errors.loanType && (
                                        <p className="error-text">
                                            <BiErrorCircle /> {errors.loanType}
                                        </p>
                                    )}

                                    <label>Tenure*</label>
                                    <input
                                        type="text"
                                        name="tenure"
                                        placeholder="Enter tenure in months"
                                        value={formData.tenure}
                                        onChange={handleChange}
                                        className={errors.tenure ? "error-input" : ""}
                                    />
                                    {errors.tenure && (
                                        <p className="error-text">
                                            <BiErrorCircle /> {errors.tenure}
                                        </p>
                                    )}
                                </div>
                            </div>

                        
                            <div className="main-loan-column">
                                <h5 className="main-loan-subtitle">Ask for More Details</h5>
                                <h3 className="main-loan-heading">
                                    <VscTriangleRight className="arrow-icon" /> Application Details
                                </h3>

                                <div className="main-loan-form">
                                    {[
                                        { label: "Applicant Name*", name: "applicantName" },
                                        { label: "Company Name*", name: "companyName" },
                                        { label: "Email*", name: "email", type: "email" },
                                        { label: "Mobile Number*", name: "mobileNumber", type: "number" },
                                        { label: "Age*", name: "age", type: "number" },
                                    ].map(({ label, name, type = "text" }) => (
                                        <div key={name}>
                                            <label>{label}</label>
                                            <input
                                                type={type}
                                                name={name}
                                                placeholder={`Enter ${label.toLowerCase().replace("*", "")}`}
                                                value={formData[name]}
                                                onChange={handleChange}
                                                className={errors[name] ? "error-input" : ""}
                                            />
                                            {errors[name] && (
                                                <p className="error-text">
                                                    <BiErrorCircle /> {errors[name]}
                                                </p>
                                            )}
                                        </div>
                                    ))}

                                    <label>Income Source*</label>
                                    <select
                                        name="incomeSource"
                                        value={formData.incomeSource}
                                        onChange={handleChange}
                                        className={errors.incomeSource ? "error-input" : ""}
                                    >
                                        <option value="">--Select Source--</option>
                                        <option value="Salary">Salary</option>
                                        <option value="Business">Business</option>
                                        <option value="Self Employed">Self Employed</option>
                                    </select>
                                    {errors.incomeSource && (
                                        <p className="error-text">
                                            <BiErrorCircle /> {errors.incomeSource}
                                        </p>
                                    )}

                                    <label>City*</label>
                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="Enter city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        className={errors.city ? "error-input" : ""}
                                    />
                                    {errors.city && (
                                        <p className="error-text">
                                            <BiErrorCircle /> {errors.city}
                                        </p>
                                    )}

                                    <label>Pincode*</label>
                                    <input
                                        type="number"
                                        name="pincode"
                                        placeholder="Enter pincode"
                                        value={formData.pincode}
                                        onChange={handleChange}
                                        className={errors.pincode ? "error-input" : ""}
                                    />
                                    {errors.pincode && (
                                        <p className="error-text">
                                            <BiErrorCircle /> {errors.pincode}
                                        </p>
                                    )}

                                    <button type="submit" className="main-loan-submit-btn">
                                        Submit
                                    </button>
                                    {status && <p style={{ marginTop: "10px" }}>{status}</p>}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </>
    );
};

export default ApplyLoan;
