import classNames from "classnames/bind";
import styles from "./Blog.module.scss";

const cx = classNames.bind(styles);
function Blog({data}) {
    return ( 
        <>
            <div className={cx("thumbnail")}>
                <img src={data.image} alt="Blog News" />
            </div>
            <div className={cx("content")}>
                <h3 className={cx("title")}>{data.headline}</h3>
                <div className={cx("detail")}>
                    <span>{data.author}</span>
                    <span>{data.date}</span>
                </div>
            </div>
        </>
     );
}

export default Blog;