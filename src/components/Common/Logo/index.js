import classNames from "classnames/bind";
import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Logo({title}) {
    return (
        <div className={cx("wrapper")}>
            <Link className={cx("hc-logo-link")} to="/">
                <FontAwesomeIcon className={cx("logo-icon")} icon={faUserAstronaut} />
                <h1>{title}</h1>
            </Link>
        </div>
    );
}

export default Logo;