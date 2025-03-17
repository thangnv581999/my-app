import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <nav className={cx("navbar")}>
            <div className={cx("logo")}>LOGO</div>
            <ul className={cx("nav-links")}>
                <li>
                    <Link to="/new-arrivals">NEW ARRIVALS</Link>
                </li>
                <li>
                    <Link to="/brand">BRAND</Link>
                </li>
                <li>
                    <Link to="/men">MEN</Link>
                </li>
                <li>
                    <Link to="/women">WOMEN</Link>
                </li>
                <li>
                    <Link to="/kids">KIDS</Link>
                </li>
                <li>
                    <Link to="/lifestyle">LIFESTYLE</Link>
                </li>
                <li>
                    <Link to="/gallery">GALLERY</Link>
                </li>
                <li>
                    <Link to="/news">NEWS</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
