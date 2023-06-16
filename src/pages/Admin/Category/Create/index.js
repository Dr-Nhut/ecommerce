import classNames from "classnames/bind";
import styles from "./CreateCategory.module.scss";
import HeaderComponent from "~/components/Admin/HeaderComponent";
import AddCategory from "~/components/Admin/Forms/AddCategory";

const cx = classNames.bind(styles);
function Create() {
    return (
        <div className={cx("wrapper")}>
            <HeaderComponent title="Thêm danh mục sản phẩm" btn_after={{ name: "Trở lại", to: "/admin/category" }} />
            <div>
                <AddCategory />
            </div>
        </div>
    );
}

export default Create;