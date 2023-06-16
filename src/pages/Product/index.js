import classNames from "classnames/bind";
import styles from "./Product.module.scss"
import { useContext } from "react";
import { ProductContext } from "~/store";
import ProductList from "~/components/Container/ProductList";

const cx = classNames.bind(styles);

function Product() {
    const products = useContext(ProductContext);
    return (
        <div className={cx("wrapper")}>
            <h1>Tất cả sản phẩm</h1>
            <div className={cx("container")}>
                <ProductList products={products} />
            </div>
        </div>
    );
}

export default Product;