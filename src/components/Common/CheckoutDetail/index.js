import classNames from "classnames/bind";
import styles from "./CheckoutDetail.module.scss";
import { useContext } from "react";
import { ProductContext } from "~/store";
import ProductItem from "./ProductItem";

const cx = classNames.bind(styles);

function CheckoutDetail({ products, method }) {
    const [state] = useContext(ProductContext);
    const ship = method === '1' ? 21000 : 30000;
    return (
        <>
            <div className={cx('product-list')}>
                {products.map((product, index) => <ProductItem key={index} product={product} />)}
            </div>
            <div className={cx('summary')}>
                <div className={cx('summary-description')}>
                    <p>Tạm tính</p>
                    <p>{state.cart.totalPrice}đ</p>
                </div>
                <div className={cx('summary-description')}>
                    <p>Phí vận chuyển</p>
                    <p>{ship}đ</p>
                </div>
            </div>
            <div className={cx('total')}>
                <p>Tổng cộng</p>
                <p>{state.cart.totalPrice + ship}đ</p>
            </div>
        </>
    );
}

export default CheckoutDetail;