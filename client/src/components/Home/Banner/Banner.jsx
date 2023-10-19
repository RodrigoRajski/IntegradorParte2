import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return (
    <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>OFERTA</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, ipsum quia corporis sequi eum velit tempora cumque vitae recusandae
                </p>
                <div className="ctas">
                    <div className="banner-cta">Leer Mas</div>
                    <div className="banner-cta v2">Compra Ahora</div>
                </div>
            </div>
            <img src={BannerImg} alt="" />
        </div>
    </div>
    );
};

export default Banner;
