import { Link } from "react-router-dom";
import { useState } from "react";
import { Search, User, ShoppingBag, ChevronDown } from "lucide-react";
import styles from "./Navbar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const menuItems = [
  {
    title: "NEW ARRIVALS",
    link: "/new-arrivals",
    subMenu: ["Latest Drops", "Trending", "Best Sellers"],
  },
  {
    title: "BRAND",
    link: "/brand",
    subMenu: ["History", "Collaborations", "Stores"],
  },
  {
    title: "MEN",
    link: "/men",
    subMenu: ["T-Shirts", "Hoodies", "Pants", "Shoes"],
  },
  { title: "WOMEN", link: "/women", subMenu: ["Dresses", "Tops", "Shoes"] },
  { title: "KIDS", link: "/kids", subMenu: ["Boys", "Girls", "Accessories"] },
  {
    title: "LIFESTYLE",
    link: "/lifestyle",
    subMenu: ["Accessories", "Home Decor"],
  },
  { title: "GALLERY", link: "/gallery" },
  { title: "NEWS", link: "/news" },
];

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <nav className={cx("navbar")}>
      <ul className={cx("nav-links")}>
        {menuItems.map(({ title, link, subMenu }, index) => (
          <li
            key={index}
            className={cx("nav-item")}
            onMouseEnter={() => setActiveMenu(title)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link to={link}>
              {title}{" "}
              {subMenu && (
                <ChevronDown size={12} className={cx("dropdown-icon")} />
              )}
            </Link>
            {subMenu && activeMenu === title && (
              <ul className={cx("dropdown-menu")}>
                {subMenu.map((sub, idx) => (
                  <li key={idx}>
                    <Link
                      to={`${link}/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {sub}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className={cx("logo")}>
        <img src="/bapelogo.png" alt="Bape Logo" />
      </div>

      <div className={cx("nav-icons")}>
        {[Search, User, ShoppingBag].map((Icon, idx) => (
          <Icon key={idx} className={cx("icon")} />
        ))}
        <span className={cx("currency")}>USD $</span>
      </div>
    </nav>
  );
}

export default Navbar;
