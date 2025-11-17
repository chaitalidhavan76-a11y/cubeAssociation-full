import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import { VscTriangleRight } from "react-icons/vsc";
import Card3 from '../../assets/images/card3.jpg';
import Card15 from '../../assets/images/card15.jpg';
import Card14 from '../../assets/images/card14.jpg';
import Card16 from '../../assets/images/card16.jpg';
import Card13 from '../../assets/images/card13.jpg';
import Card9 from '../../assets/images/card9.jpg';
import Card10 from '../../assets/images/card10.jpg';
import { FaArrowRightLong } from "react-icons/fa6";


const Explore2 = () => {
    return (
        <div className="cards">
            <h2 className="title">
                <VscTriangleRight className="arrow-icon2" />
                Our Features
            </h2>

            <div className='cardWrap'>
                <div>
                    <img variant="top" src={Card13} />
                    <div className='info'>
                        <h3>Loan & Financial Product</h3>
                        <div className='contentText1'>
                            A WIN offers a range of financial solutions.
                        </div>
                        <div className='knowMore'>
                            <h6>Know more <FaArrowRightLong /></h6>
                        </div>
                    </div >
                </div>
                <div>
                    <img variant="top" src={Card14} />
                    <div className='info'>
                        <h3>Customer First Integrity</h3>
                        <div className='contentText'>
                            A WIN, we maintain ethical practices, clear communication, and a people-first approach in every service we provide.
                        </div>
                        <div className='knowMore'>
                            <h6>Know more <FaArrowRightLong /></h6>
                        </div>
                    </div >
                </div>
                <div>
                    <img variant="top" src={Card15} />
                    <div className='info'>
                        <h3>Local Accessibility</h3>
                        <div className='contentText'>
                            Located at Virudhunagar, near the bus stand.
                            A WIN is easy to find and quicker to reach.
                        </div >
                        <div className='knowMore'>
                            <h6>Know more <FaArrowRightLong /></h6>
                        </div>
                    </div>
                </div>

                <div>
                    <img variant="top" src={Card16} />
                    <div className='info'>
                        <h3>Fast & Hassle-Free Support</h3>
                        <div className='contentText'>
                            A WIN delivers quick response, easy documentation, and a simplified process without unnecessary delays.
                        </div >
                        <div className='knowMore'>
                            <h6>Know more <FaArrowRightLong /></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Explore2;