import classNames from "classnames/bind";
import styles from "./Product.module.scss"

const cx = classNames.bind(styles);
function ProductItem({ product }) {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("item-image")}>
                <img src={product.image} alt="product" />
            </div>
            <div className={cx("item-info")}>
                <p className={cx("item-name")}>{product.title}</p>
                <span className={cx("item-price")}>{product.price}đ</span>
            </div>
        </div>
    );
}

export default ProductItem;