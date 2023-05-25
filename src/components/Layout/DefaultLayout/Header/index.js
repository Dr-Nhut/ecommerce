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

const cx = classNames.bind(styles);
function Header() {
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
                            maxWidth="none"
                            render={attrs => (
                                <div className={cx("cart-tippy", "user-tippy")} tabIndex="-1" {...attrs}>
                                    <span>Sản phẩm yêu thích</span>
                                </div>
                            )}
                        >
                            <div className={cx("login-item")}>
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