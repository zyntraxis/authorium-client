import { Link } from "react-router-dom";
import "./SubHeader.css"

const SubHeader = () => {
    return (
        <div className="sub-header container">
            <ul className="sub-header__list">
                <li className="sub-header__item">
                    <Link to="/" className="sub-header__link">Explore Products</Link>
                </li>
                <li className="sub-header__item">
                    <Link to="/" className="sub-header__link">Best Sellers</Link>
                </li>
                <li className="sub-header__item">
                    <Link to="/" className="sub-header__link">New Releases</Link>
                </li>
                <li className="sub-header__item">
                    <Link to="/" className="sub-header__link">Books</Link>
                </li>
                <li className="sub-header__item">
                    <Link to="/" className="sub-header__link">Videos</Link>
                </li>
                <li className="sub-header__item">
                    <Link to="/" className="sub-header__link">Audiobooks</Link>
                </li>
                <li className="sub-header__item">
                    <Link to="/" className="sub-header__link">Reading Hub</Link>
                </li>
                <li className="sub-header__item">
                    <Link to="/" className="sub-header__link">Newsletter Hub</Link>
                </li>
                <li className="sub-header__item">
                    <Link to="/" className="sub-header__link">Free Reading</Link>
                </li>
            </ul>
        </div>
    )
};

export default SubHeader;