import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
  FaClock,
  FaEnvelope,
} from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import FooterLogo from "../../assets/images/footer.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="Question">
        <h2>Got a question? Just ask us!</h2>
        <h3>We’re happy to help you find the right solution at WIN.</h3>

        <Link to="/contactus">
          <button className="apply-btn">Contact Us</button>
        </Link>
      </div>

      <div className="container">
        <footer className="footer-section">
          <div className="footer-container">

  
            <div className="footer-sec footer-info">
              <img src={FooterLogo} alt="WIN Financial" className="footer-logo" />

              <ul className="footer-contact">
                <li>
                  <FaLocationDot className="footer-icon" />
                  3/8, Agraharam Street, Near Old Bus Stand,<br />
                  Selvi Textile (Opp), Virudhunagar – 626001
                </li>

                <li>
                  <FaClock className="footer-icon" /> Mon – Sat 9:30 AM – 8:00 PM
                </li>

                <li>
                  <FaEnvelope className="footer-icon" />
                  mkmkganesh1@gmail.com
                </li>
              </ul>
            </div>

        
            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/home"><GoArrowUpRight /> Home</Link></li>
                <li><Link to="/aboutus"><GoArrowUpRight /> About Us</Link></li>
                <li><Link to="/ApplyLoan"><GoArrowUpRight /> Services</Link></li>
                <li><Link to="/contactus"><GoArrowUpRight /> Contact Us</Link></li>
              </ul>
            </div>

      
            <div className="footer-col">
              <h3>Explore Loan</h3>
              <ul>
                <li><Link to="/ApplyLoan"><GoArrowUpRight /> Home Loans</Link></li>
                <li><Link to="/ApplyLoan"><GoArrowUpRight /> Business Loans</Link></li>
                <li><Link to="/ApplyLoan"><GoArrowUpRight /> Personal Loans</Link></li>
                <li><Link to="/ApplyLoan"><GoArrowUpRight /> Bike Loans</Link></li>
                <li><Link to="/ApplyLoan"><GoArrowUpRight /> Car Loans</Link></li>
                <li><Link to="/ApplyLoan"><GoArrowUpRight /> Credit Card</Link></li>
                <li><Link to="/ApplyLoan"><GoArrowUpRight /> Gold Loans</Link></li>
              </ul>
            </div>


            <div className="footer-col footer-contact-col">
              <div className="contact-details">
                <MdCall className="call-icon" />
                <div>
                  <p>For Further Details</p>
                  <h4>+91 95241 30044</h4>
                </div>
              </div>

              <h3 className="follow-title">Follow Us</h3>
              <div className="social-icons">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaYoutube /></a>
                <a href="#"><FaWhatsapp /></a>
                <a href="#"><FaLinkedinIn /></a>
              </div>
            </div>

          </div>

          <div className="footer-bottom">
            <p>Copyright © 2025 by WIN Financial Service</p>
            <p>Developed by Alagu Tech Solutions</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
