import classNames from "classnames/bind";
import styles from "./CreateProduct.module.scss";
import HeaderComponent from "~/components/Admin/HeaderComponent";
import AddProduct from "~/components/Admin/Forms/AddProduct";

const cx = classNames.bind(styles);
function CreateProduct() {
    return (
        <div className={cx("wrapper")}>
            <HeaderComponent title="Thêm sản phẩm" btn_after={{ name: "Trở lại", to: "/admin/product" }} />
            <div>
                <AddProduct />
            </div>
        </div>
    );
}

export default CreateProduct;