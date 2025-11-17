import { VscTriangleRight } from "react-icons/vsc";
import Marquee from "react-fast-marquee";
import Fast1 from '../../assets/images/fast1.png';
import Fast2 from '../../assets/images/fast2.png';
import Fast3 from '../../assets/images/fast3.png';
import Fast4 from '../../assets/images/fast4.png';
import Fast5 from '../../assets/images/fast5.png';
import Fast6 from '../../assets/images/fast6.jpg';
import Explore from "../Card";
import aboutImage from '../../assets/images/about-us.png';
import Explore2 from "../Card2";
import LoanCalculator from "../../Components/CalculatorLoan";
import Banner from "../../Components/Banner";
import Header from "../../Components/Header";







const Home = () => {
    return (
        <>
            <Banner />
            <div className="home-section">
                <div className="container">
                    <section className="bank-partners">
                        <h2 className="section-title">
                            <VscTriangleRight className="arrow-icon" />
                            OUR BANK PARTNERS
                        </h2>

                        <div className="bank-logos">
                            <Marquee pauseOnHover speed={100} gradient>
                                <div><img src={Fast1}></img></div>
                                <div><img src={Fast2}></img></div>
                                <div><img src={Fast3}></img></div>
                                <div><img src={Fast4}></img></div>
                                <div><img src={Fast5}></img></div>
                                <div><img src={Fast6}></img></div>
                            </Marquee>
                        </div>

                    </section>

                    <Explore />
                </div>


                <section className="about-section">
                    <div className="about-container">
                        <div className="aboutus-left">
                            <p className="aboutus-subtitle">WHEN YOU MAKE IT</p>
                            <h2 className="aboutus-title">
                                <span className="triangle">▲</span> About Us
                            </h2>
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


                            <button className="aboutus-btn">Apply for Loan</button>
                        </div>

                        <div className="aboutus-right">
                            <img src={aboutImage} alt="About Us" />
                        </div>
                    </div>
                </section>

                <div className="container"><Explore2 /></div>

                <LoanCalculator />


            </div>
        </>

    )
}
export default Home;