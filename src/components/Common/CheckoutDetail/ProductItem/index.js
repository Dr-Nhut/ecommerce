import classNames from "classnames/bind";
import styles from "./ProductItem.module.scss";

const cx = classNames.bind(styles);

function ProductItem({product}) {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('thumbnail-container')}>
                <img className={cx('thumbnail')} src={`http://localhost:5000/${product.product_thumbnail}`} alt={'thumbnail'} />
                <div className={cx('count')}>{product.quantity}</div>
            </div>

            <div className={cx('info')}>
                <b>{product.product_name}</b>
                <p>{product.color} / {product.size}</p>
            </div>

            <div className={cx("price")}>{product.quantity * product.product_price}đ</div>
        </div>
     );
}

export default ProductItem;