import classNames from "classnames/bind";
import styles from "../Product.module.scss";
import HeaderComponent from "~/components/Admin/HeaderComponent";
import { ProductsTable } from "~/components/Tables";
import Panigation from "~/components/Common/Panigation";
import { useState } from "react";

const cx = classNames.bind(styles);

function ProductManager() {
    const [page, setPage] = useState(1);
    return (
        <div className={cx("wrapper")}>
            <HeaderComponent title="Danh sách sản phẩm" btn_after={{ name: "Thêm sản phẩm", to: "./create" }} />

            <div className={cx("product-container")}>
                <ProductsTable page={page}/>
                <Panigation type={'products'} page={page} setPage={setPage}/>
            </div>
        </div>
    );
}

export default ProductManager;