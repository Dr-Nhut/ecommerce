import classNames from "classnames/bind";
import styles from "./CheckoutLayout.module.scss";

const cx = classNames.bind(styles);

function CheckoutLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            {children}
        </div>
    );
}

export default CheckoutLayout;