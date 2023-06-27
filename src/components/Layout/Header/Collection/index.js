//Icon cart and favorites
import classNames from "classnames/bind";
import styles from "../Header.module.scss";
import Tippy from "@tippyjs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Collection({ count, tippy, icon, to }) {
    return (
        <Tippy
            trigger="focusin"
            hideOnClick={true}
            maxWidth="none"
            interactive
            placement="bottom-end"
            render={attrs => (
                <span>{tippy}</span>
            )}
        >
            <Link to={to} className={cx("login-item")}>
                <div className={cx("count-product")}>
                    <span>{count}</span>
                </div>
                <FontAwesomeIcon className={cx("login-icon")} icon={icon} />
            </Link>
        </Tippy>
    );
}

export default Collection;