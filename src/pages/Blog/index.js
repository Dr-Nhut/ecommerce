import classNames from "classnames/bind";
import styles from "./Blog.module.scss";
import BlogList from "~/components/BlogList";

const cx = classNames.bind(styles);

function Blog() {
    return (
        <div className={cx("wrapper")}>
            <BlogList />
        </div>
    );
}

export default Blog;