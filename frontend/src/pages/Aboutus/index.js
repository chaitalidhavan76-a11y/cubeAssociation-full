import { FaHome } from "react-icons/fa";
import BannerImage from "../../assets/images/about-banner.png";
import aboutImage from '../../assets/images/about-us.png';
import { Link } from "react-router-dom";

const Aboutus = () => {
    return (
        <>
            <div
                className="about-ban"
                style={{ backgroundImage: `url(${BannerImage})` }}
            >
                <div className="overlay"></div>
                <div className="us-container">
                    <div className="banner-content">
                        <FaHome className="breadcrumb-icon" />
                        <span className="breadcrumb-separator">/</span>
                        <span className="breadcrumb-text">About Us</span>
                    </div>
                </div>
            </div>

            <div className="main-about-container">
                <div className="main-about-content">
                    <h5 className="main-about-subtitle">WHEN YOU MAKE IT</h5>
                    <h2 className="main-about-title">About Us</h2>
                    <p>
                        A Win Financial Service based in Virudhunnagar has been a trusted name since 2015, delivering consistent service across various domains.
                    </p>
                    <p>
                        Over the years, we have built a strong foundation by dedicating ourselves to excellence, client satisfaction, and continuous improvement.
                    </p>
                    <p>
                        Our team, committed to their roles, has steadily grown and earned the trust of individual and business clients alike.

                        Located in the heart of Virudhunnagar, at Agraharam Street near the old bus stand 
                    </p>
                    <p>A Win Financial Service is easily accessible to all our clients and visitors.</p>

                    <Link to='/ApplyLoan'><button className="main-apply-btn">Apply for Loan</button></Link>
                </div>

                <div className="main-about-image">
                    <img src={aboutImage} alt="About A Cube" />
                </div>
            </div>
        </>
    );
};

export default Aboutus;
