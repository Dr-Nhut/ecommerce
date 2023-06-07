import classNames from "classnames/bind";
import styles from "./BlogList.module.scss";
import Blog from "../Blog";
import {newsList} from "~/data/newsList.js";

const cx = classNames.bind(styles);

function BlogList() {
    return ( 
        <div className={cx("wrapper")}>
            {newsList.map( (news, index) => <div className={cx("blog-item")}><Blog data={news} key={index} /></div>) }
        </div>
    );
}

export default BlogList;