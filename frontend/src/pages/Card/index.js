import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import { VscTriangleRight } from "react-icons/vsc";
import Card1 from '../../assets/images/card1.jpg'
import Card2 from '../../assets/images/card2.jpg'
import Card3 from '../../assets/images/card3.jpg'
import Card4 from '../../assets/images/card4.jpg'
import Card5 from '../../assets/images/card5.jpg'
import Card6 from '../../assets/images/card6.jpg'
import Card7 from '../../assets/images/card7.jpg'
import Card8 from '../../assets/images/card8.jpg'
import Card9 from '../../assets/images/card9.jpg'
import Card10 from '../../assets/images/card10.jpg'
import Card11 from '../../assets/images/card11.jpg'
import Card12 from '../../assets/images/card12.jpg'
import { FaArrowRightLong } from "react-icons/fa6";


const Explore = () => {
    return (
        <div className="cards">
            <h2 className="title">
                <VscTriangleRight className="arrow-icon2" />
                Explore Our Financial & Insurance Services
            </h2>

            <div className='cardWrap'>
                <div>
                    <img variant="top" src={Card6} />
                    <div className='info'>
                        <h3>Home Loans</h3>
                        <div className='contentText'>
                            We provide competitive interest rates, swift approvals, and expert assistance throughout the process.
                        </div>
                        <div className='knowMore'>
                            <h6>Know more <FaArrowRightLong /></h6>
                        </div>
                    </div >
                </div>
                <div>
                    <img variant="top" src={Card7} />
                    <div className='info'>
                        <h3>Personal Loans</h3>
                        <div className='contentText'>
                            Our feature minimal paperwork, prompt disbursement, and flexible repayment options.
                        </div>
                        <div className='knowMore'>
                            <h6>Know more <FaArrowRightLong /></h6>
                        </div>
                    </div >
                </div>
                <div>
                    <img variant="top" src={Card9} />
                    <div className='info'>
                        <h3>Business Loans</h3>
                        <div className='contentText'>
                            Accelerate your business growth with our versatile business loan offerings. Choose free financing options with attractive terms.
                        </div >
                        <div className='knowMore'>
                            <h6>Know more <FaArrowRightLong /></h6>
                        </div>
                    </div>
                </div>

                <div>
                    <img variant="top" src={Card10} />
                    <div className='info'>
                        <h3>Mortgage Loans</h3>
                        <div className='contentText'>
                            Leverage the value of your property through our secure mortgage loan services.
                        </div >
                        <div className='knowMore'>
                            <h6>Know more <FaArrowRightLong /></h6>
                        </div>
                    </div>
                </div>

                <div>
                    <img variant="top" src={Card3} />
                    <div className='info'>
                        <h3>Doctor Loans</h3>
                        <div className='contentText'>
                            Need funds to setup a clinic or manage personal expense. Growing your medical practice with confidence.
                        </div>
                        <div className='knowMore'>
                            <h6>Know more <FaArrowRightLong /></h6>
                        </div>
                    </div >
                </div>
                <div>
                    <img variant="top" src={Card2} />
                    <div className='info'>
                        <h3>Best Gold Buyer</h3>
                        <div className='contentText'>
                            The description should highlight the item purity (karats), weight and current market value for our value customers.
                        </div>
                        <div className='knowMore'>
                            <h6>Know more <FaArrowRightLong /></h6>
                        </div>
                    </div >
                </div>
                <div>
                    <img variant="top" src={Card5} />
                    <div className='info'>
                        <h3>Car/Bike Loans</h3>
                        <div className='contentText'>
                            Ride your dream with our easy and affordable bike and car loan option we offer.
                        </div>
                        <div className='knowMore'>
                            <h6>Know more <FaArrowRightLong /></h6>
                        </div>
                    </div >
                </div>
                <div>
                    <img variant="top" src={Card8} />
                    <div className='info'>
                        <h3>Land Loans</h3>
                        <div className='contentText'>
                            DTCP approved and non-approved land.
                            We offer a great way to give the customers.
                        </div>
                        <div className='knowMore'>
                            <h6>Know more <FaArrowRightLong /></h6>
                        </div>
                    </div >
                </div>
            </div>
        </div>
    )
}
export default Explore;