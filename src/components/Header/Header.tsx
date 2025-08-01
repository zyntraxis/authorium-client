import "./Header.css"
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
    return (
        <header className="header container">
            <ul className="header__list">
                <li className="header__item">
                    <Link to="/" className="header__logo">Authorium</Link>
                </li>
                <li className="header__item">
                    <input type="text" className="header__search" placeholder="Search..." />
                </li>
                <li className="header__item">
                    <Link to="/" className="header__link">Subscription</Link>
                </li>
                <li className="header__item">
                    <AiOutlineUser size={30} className="header__user"/>
                </li>
            </ul>
        </header>
    )
};

export default Header;