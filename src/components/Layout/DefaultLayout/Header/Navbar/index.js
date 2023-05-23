import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function NavBar() {
    return (
        <div className={cx("wrapper")}>
            <ul className={cx("navbar-container")}>
                <li className={cx("nav-item")}><Link className={cx("nav-item-link")} to="/">Trang chủ</Link></li>
                <li className={cx("nav-item")}><Link className={cx("nav-item-link")} to="/product">Sản phẩm</Link></li>
                <li className={cx("nav-item")}><Link className={cx("nav-item-link")} to="/about-us">Giới thiệu</Link></li>
                <li className={cx("nav-item")}><Link className={cx("nav-item-link")} to="/blog">Blog</Link></li>
            </ul>
        </div>
    );
}

export default NavBar;