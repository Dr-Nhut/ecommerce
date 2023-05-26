import classNames from "classnames/bind";
import styles from "./Message.module.scss";

import { SUCSESS, INFO, WARN, ERROR } from "~/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleExclamation, faTriangleExclamation, faCircleInfo } from "@fortawesome/free-solid-svg-icons"

const cx = classNames.bind(styles);

function Message({ type = { INFO }, message }) {
    let icon;
    switch (type) {
        case SUCSESS:
            icon = faCircleCheck
            break;
        case WARN:
            icon = faCircleExclamation
            break;
        case ERROR:
            icon = faTriangleExclamation
            break;
        default:
            icon = faCircleInfo
    }
    return (
        <div className={cx("wrapper", type)}>
            <FontAwesomeIcon icon={icon} />
            <span>{message}</span>
        </div>
    );
}

export default Message;