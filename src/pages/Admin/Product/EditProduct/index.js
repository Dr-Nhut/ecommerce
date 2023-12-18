import classNames from "classnames/bind";
import styles from "../Product.module.scss";
import UpdateProduct from "~/components/Admin/Forms/UpdateProduct";
import HeaderComponent from "~/components/Admin/HeaderComponent";

const cx = classNames.bind(styles);

function EditProduct() {
    return (
        <div className={cx("wrapper")}>
            <HeaderComponent title="Cập nhật sản phẩm" btn_after={{ name: "Trở lại", to: "/admin/product" }} />
            <div>
                <UpdateProduct />
            </div>
        </div>
    );
}

export default EditProduct;