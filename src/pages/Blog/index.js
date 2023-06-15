import classNames from "classnames/bind";
import styles from "./Blog.module.scss";
import BlogList from "~/components/BlogList";

const cx = classNames.bind(styles);

function Blog() {
    return (
        <div className={cx("wrapper")}>
            <h1 className={cx("title")}>Tất cả bài viết</h1>
            <BlogList />
        </div>
    );
}

export default Blog;