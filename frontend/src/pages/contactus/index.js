import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaHome } from "react-icons/fa";
import BannerContact from "../../assets/images/contact-banner.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { VscTriangleRight } from "react-icons/vsc";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    loan: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

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
      await axios.post("https://win-association-full.onrender.com/api/contact", formData);
      toast.success("Thank you for contacting us. Our team will reach out to you soon");
      setFormData({
        name: "",
        email: "",
        number: "",
        loan: "",
        message: "",
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
        style={{ backgroundImage: `url(${BannerContact})` }}
      >
        <div className="overlay"></div>
        <div className="us-container">
          <div className="banner-content">
            <FaHome className="breadcrumb-icon" />
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-text">Contact Us</span>
          </div>
        </div>
      </div>

    
      <section className="main-contact-section">
        <div className="main-navbar-aligned-container">
          <div className="main-contact-header">
            <h5 className="main-contact-subtitle">Get In Touch</h5>
            <h2 className="main-contact-title">
              <VscTriangleRight className="arrow-icon" />
              Ask for your Query
            </h2>
          </div>

          <div className="main-contact-card">
    
            <div className="main-contact-info">
              <div className="main-info-box">
                <FaPhoneAlt className="main-info-icon" />
                <div>
                  <h5>Call Anytime</h5>
                  <p>+91 95241 30044</p>
                </div>
              </div>

              <div className="main-info-box">
                <FaEnvelope className="main-info-icon" />
                <div>
                  <h5>Write Email</h5>
                  <p>mkmkganesh1@gmail.com</p>
                </div>
              </div>

              <div className="main-info-box">
                <IoLocationSharp className="main-info-icon" />
                <div>
                  <h5>Branch Office</h5>
                  <p>
                    3/8, Agraharam Street,
                    Near Old Bus Stand,
                    Selvi Textile (Opp),
                    Virudhunagar – 626001
                  </p>
                </div>
              </div>
            </div>


            <div className="main-contact-form">
              <form onSubmit={handleSubmit} noValidate>
                <div className="main-form-grid">
                
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name*"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? "error-input" : ""}
                    />
                    {errors.name && (
                      <small className="error-text">{errors.name}</small>
                    )}
                  </div>

        
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email*"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? "error-input" : ""}
                    />
                    {errors.email && (
                      <small className="error-text">{errors.email}</small>
                    )}
                  </div>

    
                  <div className="form-group">
                    <input
                      type="text"
                      name="number"
                      placeholder="Number*"
                      value={formData.number}
                      onChange={handleChange}
                      className={errors.number ? "error-input" : ""}
                    />
                    {errors.number && (
                      <small className="error-text">{errors.number}</small>
                    )}
                  </div>

                
                  <div className="form-group">
                    <input
                      type="text"
                      name="loan"
                      placeholder="Loan*"
                      value={formData.loan}
                      onChange={handleChange}
                      className={errors.loan ? "error-input" : ""}
                    />
                    {errors.loan && (
                      <small className="error-text">{errors.loan}</small>
                    )}
                  </div>
                </div>

        
                <div className="form-group">
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Write Message*"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? "error-input" : ""}
                  ></textarea>
                  {errors.message && (
                    <small className="error-text">{errors.message}</small>
                  )}
                </div>

                <button type="submit" className="main-submit-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>


      <div className="main-map-container">
        <iframe
          title="A Cube Associates Location"
          src="https://www.google.com/maps?q=46,+South+Marret+Street,+Madurai+625001&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default ContactUs;
