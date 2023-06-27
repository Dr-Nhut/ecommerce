import classNames from "classnames/bind";
import styles from "./ProductDetail.module.scss";
import { useParams } from "react-router-dom";
import Product from "~/components/Container/ProductDetail";

const cx = classNames.bind(styles);



function ProductDetail() {
    const params = useParams();
    return (
        <div className={cx("wrapper")}>
            <Product param={params.productId} />
        </div>
    );
}

export default ProductDetail;