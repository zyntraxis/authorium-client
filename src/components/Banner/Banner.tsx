import { Link } from "react-router-dom";
import "./Banner.css"

const Banner = () => {
    return (
        <div className="banner container">
            <div className="banner__left">
                <h1 className="banner__title">Subscription - 50% Off</h1>
                <h3 className="banner__subtitle">
                    Save on your first month, access to 7,500+ titles
                </h3>
                <p className="banner__descr">
                    Advance your knowledge with the largest independent learning library in tech at an unbeatable price!
                </p>
                <Link to="/books" className="banner__btn">
                    View Offers
                </Link>
            </div>
            <div className="banner__right">
                <img src="https://www.packtpub.com/cdn-cgi/image/format=auto,width=auto/https://cdn.packtpub.com/cms-content/files/Subscription-450px-Desktop-New-Size_increase.webp" className="banner__image" />
            </div>
        </div>
    )
}

export default Banner;