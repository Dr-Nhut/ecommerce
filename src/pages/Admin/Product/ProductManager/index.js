import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import HeaderComponent from "~/components/Admin/HeaderComponent";

const cx = classNames.bind(styles);

function ProductManager() {
    return (
        <div className={cx("wrapper")}>
            <HeaderComponent title="Danh sách sản phẩm" btn_after={{ name: "Thêm sản phẩm", to: "./create" }} />

            <div className={cx("product-container")}>
                All Product
            </div>
        </div>
    );
}

export default ProductManager;