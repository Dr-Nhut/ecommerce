import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function MenuSidebar() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("header")}>Danh mục bài viết</div>

            <div className={cx("applied-filters")}>
                Danh sách bài viết mới
            </div>

        </div>
    );
}

export default MenuSidebar;