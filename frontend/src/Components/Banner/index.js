import Carousel from 'react-bootstrap/Carousel';
import Banner1 from '../../assets/images/1.jpg';
import Banner2 from '../../assets/images/2.jpg';
import Banner3 from '../../assets/images/3.jpg';
import Banner4 from '../../assets/images/4.jpg';
import Banner5 from '../../assets/images/5.jpg';
import { Link } from "react-router-dom";



const Banner = () => {
    return (
        <>
            <div className='carousel-wrap'>
                <Carousel controls={false} indicators={false} interval={2000} pause={false} touch={true}>
                    <Carousel.Item>
                        <img src={Banner1} alt="Slide 1" className="banner-img" />
                        <div className="overlay"></div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Banner2} alt="Slide 2" className="banner-img" />
                        <div className="overlay"></div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Banner3} alt="Slide 3" className="banner-img" />
                        <div className="overlay"></div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Banner4} alt="Slide 4" className="banner-img" />
                        <div className="overlay"></div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Banner5} alt="Slide 5" className="banner-img" />
                        <div className="overlay"></div>
                    </Carousel.Item>
                </Carousel>
                <div className="hero-text">
                    <h1>WIN Financial Service</h1>
                    <h3>Easy Way for Loan</h3>
                    <p>
                        A WIN, with 10+ years of experience in the field, has helped over 100+ customers, including emerging business owners, access loans through various banks.
                    </p>
                    <Link to='/ApplyLoan'><button className="cta-btn">Apply for Loan</button></Link>
                </div>
            </div>

        </>
    )
}
export default Banner;