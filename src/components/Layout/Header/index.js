import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Search from "~/components/Common/Search";
import Navbar from "~/components/Common/Navbar";
import { useContext } from "react";
import { ProductContext } from "~/store";
import Logo from "~/components/Common/Logo";
import User from "./User";
import Collection from "./Collection";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);
function Header() {
    const [state] = useContext(ProductContext);
    const countFavourites = Object.keys(state.favourites).length;
    const countCart = state.cart.quantity || 0;

    return (
        <header className={cx("wrapper")}>
            <div className={cx("header-upper")}>
                <div className={cx("header-content")}>
                    <Logo title="Astronaut" />

                    <div className={cx("hc-search")}>
                        <Search rounded placeholder="Tìm kiếm sản phẩm" />
                    </div>

                    <div className={cx("hc-user")}>
                        <Collection to="/favourite" tippy='Yêu thích' icon={faHeart} count={countFavourites} />

                        <Collection to="/cart" tippy='Giỏ hàng' icon={faCartShopping} count={countCart} />

                        <User />
                    </div>
                </div>
            </div>
            <nav className={cx("header-navbar")}>
                <Navbar data={[{ title: "Trang chủ", to: "/" }, { title: "Sản phẩm", to: "/product" }, { title: "Giới thiệu", to: "/about-us" }, { title: "Blog", to: "/blog" }]} />
            </nav>
        </header>
    );
}

export default Header;