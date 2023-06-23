import classNames from "classnames/bind";
import styles from "./MenuItem.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function MenuItem({ data, size }) {
    let Comp = "div";
    let classLink;
    const props = {}
    if (data.to) {
        props.to = data.to;
        classLink = "item-link"
        Comp = Link;
    }
    return (
        <li className={cx("wrapper", size)}>
            <Comp onClick={data.onClick} className={cx("item", classLink)} {...props}>
                {data.icon && <FontAwesomeIcon className={cx("icon")} icon={data.icon} />}
                <span>{data.title}</span>
            </Comp>
        </li>
    );
}

export default MenuItem;