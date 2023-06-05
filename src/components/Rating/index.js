import classNames from "classnames/bind";
import styles from "./Rating.module.scss";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

function Rating({ startsWidth, icon = faStar }) {
    return (
        <div className={cx("wrapper")}>
            <FontAwesomeIcon className={cx("item")} icon={icon} />
            <FontAwesomeIcon className={cx("item")} icon={icon} />
            <FontAwesomeIcon className={cx("item")} icon={icon} />
            <FontAwesomeIcon className={cx("item")} icon={icon} />
            <FontAwesomeIcon className={cx("item")} icon={icon} />
            <div className={cx("overlay")} style={{ width: `${startsWidth}%` }}></div>
        </div>
    );
}

export default Rating;