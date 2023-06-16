import classNames from "classnames/bind";
import styles from "./ProductList.module.scss";
import Product from "~/components/Product";

const cx = classNames.bind(styles);

function ProductList({ products }) {
    return (
        <div className={cx("wrapper")}>
            {products.map(product => (
                <div key={product.id} className={cx("product-item")} >
                    <Product product={product} />
                </div>
            ))}
        </div>
    );
}

export default ProductList;