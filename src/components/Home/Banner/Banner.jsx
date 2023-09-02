import "./Banner.scss";
import Bannering from "../../../assets/banner-img.png"
const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALE</h1>
                <div className="main-text">
                Enjoy a 40% discount on your first order with us. Don't miss out on this fantastic offer!
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
            </div>
            <img className="banner-img" src={Bannering}alt=""  />
        </div>
    </div>;
};

export default Banner;
