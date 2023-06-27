import classNames from "classnames/bind";
import styles from "./BlogDetail.module.scss";

const cx = classNames.bind(styles);

function BlogDetail() {
    return (
        <div className={cx("wrapper")}>
            <h1>Blog Details</h1>
        </div>
    );
}

export default BlogDetail;