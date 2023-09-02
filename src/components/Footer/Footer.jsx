import "./Footer.scss";
import {FaLocationArrow, FaMobileAlt,FaEnvelope} from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Voluptatem accusantium doloremque laudantium,totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architectp beatae vitae dicta sunt explicabo eaque
                        ipsa quae ab illo
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Kayaloram Rd, Punnamada, Kottankulangara, Alappuzha,
                            Kerala, 688006
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 0471 272 0261</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: store@m1.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <div className="text">
                            Heaadphones
                        </div>
                        <div className="text">
                            Smart Watches
                        </div>
                        <div className="text">
                            Bluetooth Speakers
                        </div>
                        <div className="text">
                            Wireless Earbuds
                        </div>
                        <div className="text">
                            Home Theatre
                        </div>
                        <div className="text"> Projectors</div>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <div className="text">Home</div>
                    <div className="text">About</div>
                    <div className="text">Privacy Policy</div>
                    <div className="text">Returns</div>
                    <div className="text">Terms & Conditions</div>
                    <div className="text">Contact Us</div>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        M1STORE 2022 CREATED BY JS DEV. PREMIUM E-COMMERCE 
                        SOLUTIONS.
                    </div>
                    <img src={Payment}/>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
