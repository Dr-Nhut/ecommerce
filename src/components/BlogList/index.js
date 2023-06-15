import classNames from "classnames/bind";
import styles from "./BlogList.module.scss";
import Blog from "../Blog";
import {newsList} from "~/data/newsList.js";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function BlogList() {
    return ( 
        <div className={cx("wrapper")}>
            {newsList.map( (news, index) => <Link to={`./${news.id}`} className={cx("blog-item")}><Blog data={news} key={index} /></Link>) }
        </div>
    );
}

export default BlogList;