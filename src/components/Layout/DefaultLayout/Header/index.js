import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCircleUser, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";
import Search from "~/components/Search";
import Navbar from "./Navbar";
import Popper from "~/components/Popper";
import Menu from "~/components/Popper/Menu";
import { AUTH_ITEMS } from "~/constant";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { FavouriteContext, ProductContext } from "~/store";
import MenuProduct from "~/components/Popper/MenuProduct";
import Button from "~/components/Button";

const cx = classNames.bind(styles);
function Header() {
    const products = useContext(ProductContext);
    const [state] = useContext(FavouriteContext);
    let favProducts = [];
    const countFavourites = products.reduce((pre, cur) => {
        if (state[cur.id]) {
            favProducts.push(cur);
        }
        return pre + state[cur.id]
    }, 0)

    const handleFavTippy = (attrs) => {
        return countFavourites ?
            (
                <div className={cx("cart-tippy", "user-tippy")} tabIndex="-1" {...attrs}>
                    <div className={cx("tippy-content")}>
                        {
                            favProducts.length <= 4
                                ? <MenuProduct title="Sản phẩm đã thích" data={favProducts} />
                                : <MenuProduct title="Sản phẩm đã thích" data={[...favProducts].splice(0, 4)} anouncement={`Xem thêm ${favProducts.length - 4} sản phẩm`} />
                        }
                    </div>
                    <div className={cx("tippy-btn")}><Button to="/products/favourites" primary>Xem tất cả</Button></div>
                </div>
            ) :
            (
                <div className={cx("cart-tippy", "user-tippy")} tabIndex="-1" {...attrs}>
                    <span>Sản phẩm yêu thích</span>
                </div>
            )
    }

    return (
        <header className={cx("wrapper")}>
            <div className={cx("header-upper")}>
                <div className={cx("header-content")}>
                    <div className={cx("hc-logo")}>
                        <Link className={cx("hc-logo-link")} to="/">
                            <FontAwesomeIcon className={cx("logo-icon")} icon={faUserAstronaut} />
                            <h1>Astronaut</h1>
                        </Link>
                    </div>

                    <div className={cx("hc-search")}>
                        <Search rounded placeholder="Tìm kiếm sản phẩm" />
                    </div>

                    <div className={cx("hc-user")}>

                        <Tippy
                            trigger="click"
                            hideOnClick={true}
                            maxWidth="none"
                            interactive
                            placement="bottom-end"
                            render={attrs => (
                                <div className={cx("login-tippy", "user-tippy")} tabIndex="-1" {...attrs}>
                                    <Popper>
                                        <Menu data={AUTH_ITEMS} />
                                    </Popper>
                                </div>
                            )}
                        >
                            <div className={cx("login-item")}>
                                <FontAwesomeIcon className={cx("login-icon")} icon={faCircleUser} />
                            </div>
                        </Tippy>

                        <Tippy
                            trigger="focusin click"
                            hideOnClick={true}
                            maxWidth="none"
                            interactive
                            placement="bottom-end"
                            render={attrs => (
                                handleFavTippy(attrs)
                            )}
                        >
                            <div className={cx("login-item")}>
                                <div className={cx("count-product")}>
                                    <span>{countFavourites}</span>
                                </div>
                                <FontAwesomeIcon className={cx("login-icon")} icon={faHeart} />
                            </div>
                        </Tippy>

                        <Tippy
                            maxWidth="none"
                            render={attrs => (
                                <div className={cx("cart-tippy", "user-tippy")} tabIndex="-1" {...attrs}>
                                    <span>Giỏ hàng</span>
                                </div>
                            )}
                        >
                            <div className={cx("login-item")}>
                                <div className={cx("count-product")}>
                                    <span>0</span>
                                </div>
                                <FontAwesomeIcon className={cx("login-icon")} icon={faCartShopping} />
                            </div>
                        </Tippy>

                    </div>
                </div>
            </div>
            <nav className={cx("header-navbar")}>
                <Navbar />
            </nav>
        </header>
    );
}

export default Header;