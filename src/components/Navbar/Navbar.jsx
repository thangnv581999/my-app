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
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
