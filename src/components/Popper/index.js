import classNames from "classnames/bind";
import styles from "./Poper.module.scss"
import ProductItem from "~/components/ProductItem";

const cx = classNames.bind(styles);

function Popper({ title, data, anouncement }) {
    return (
        <div className={cx("wrapper")}>
            {title && <h4 key="title" className={cx("tippy-title")}>{title}</h4>}
            {data && data.map((item, index) => <ProductItem key={index} product={item} />)}
            {anouncement && <h4 key="announcement" className={cx("search-announcement")}>{anouncement}</h4>}
        </div>
    );
}

export default Popper;