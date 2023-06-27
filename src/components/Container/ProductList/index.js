import classNames from "classnames/bind";
import styles from "./ProductList.module.scss";
import Product from "~/components/Container/Product";
import { useContext } from "react";
import { ProductContext } from "~/store";

const cx = classNames.bind(styles);

function ProductList(props) {
    const products = useContext(ProductContext)[0].products;
    const limit = props.limit;

    return (
        <div className={cx("wrapper")}>
            {products.slice(0, limit).map(product => (
                <div key={product.idproduct} className={cx("product-item")} >
                    <Product product={product} />
                </div>
            ))}
        </div>
    );
}

export default ProductList;