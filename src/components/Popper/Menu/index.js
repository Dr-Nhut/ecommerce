import classNames from "classnames/bind";
import styles from "./Menu.module.scss"
import MenuItem from "./MenuItem";
const cx = classNames.bind(styles);

function Menu({ data, className }) {
    return (
        <div className={cx("wrapper")}>
            {data.map((item, index) => <MenuItem className={className} key={index} data={item} />)}
        </div>
    );
}

export default Menu;