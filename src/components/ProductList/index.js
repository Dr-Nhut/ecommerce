import classNames from "classnames/bind";
import styles from "./ProductList.module.scss";
import Product from "~/components/Product";
import { useContext } from "react";
import { FilterContext } from "~/store/context";

const cx = classNames.bind(styles);

function ProductList({ products }) {
    const [filters] = useContext(FilterContext);
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