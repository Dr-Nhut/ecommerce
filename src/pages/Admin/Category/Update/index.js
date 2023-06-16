import classNames from "classnames/bind";
import styles from "./Update.module.scss";
import HeaderComponent from "~/components/Admin/HeaderComponent";
import EditCategory from "~/components/Admin/Forms/EditCategory";

const cx = classNames.bind(styles);
function Update() {
    return (
        <div className={cx("wrapper")}>
            <HeaderComponent title="Sửa danh mục sản phẩm" btn_after={{ name: "Trở lại", to: "/admin/category" }} />
            <div>
                <EditCategory />
            </div>
        </div>
    );
}

export default Update;