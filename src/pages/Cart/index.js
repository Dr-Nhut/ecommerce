import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import CartList from "~/components/Container/CartList";

const cx = classNames.bind(styles);
function Cart() {
    return (
        <div className={cx("wrapper")}>
            <h1 className={cx("title")}>Giỏ hàng của bạn</h1>
            <CartList />
        </div>
    );
}

export default Cart;