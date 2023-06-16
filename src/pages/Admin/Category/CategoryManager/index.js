import classNames from "classnames/bind";
import styles from "./Category.module.scss";
import HeaderComponent from "~/components/Admin/HeaderComponent";
import ListItem from "~/components/Admin/ListItem";

const cx = classNames.bind(styles);

function CatogoryManager() {
    return (
        <div className={cx("wrapper")}>
            <HeaderComponent title="Danh mục sản phẩm" btn_after={{ name: "Thêm danh mục", to: "./create" }} />

            <div className={cx("container")}>
                <ListItem value='categories' />
            </div>
        </div>
    );
}

export default CatogoryManager;