import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function NavBar({ data, active, activeTab, children }) {
    return (
        <div className={cx("wrapper")}>
            <ul className={cx("navbar-container")}>
                {data && data.map((item, index) => {
                    if (activeTab) {
                        var actived;
                        active === index ? actived = true : actived = false;
                        return (<li onClick={() => activeTab(index)} key={index} className={cx("nav-item")}>
                            <Link className={cx("nav-item-link", { actived })} to={item.to}>{item.title}</Link>
                        </li>)
                    }
                    else {
                        return (<li key={index} className={cx("nav-item")}>
                            <Link className={cx("nav-item-link")} to={item.to}>{item.title}</Link>
                        </li>)
                    }
                })}
                {children}
            </ul>
        </div>
    );
}

export default NavBar;