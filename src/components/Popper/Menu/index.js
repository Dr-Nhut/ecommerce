import classNames from "classnames/bind";
import styles from "./Menu.module.scss"
import MenuItem from "./MenuItem";
const cx = classNames.bind(styles);

function Menu({ data }) {
    return (
        <div className={cx("wrapper")}>
            {data.map((item, index) => <MenuItem key={index} data={item} />)}
        </div>
    );
}

export default Menu;