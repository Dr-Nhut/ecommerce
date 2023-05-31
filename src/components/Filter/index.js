import classNames from "classnames/bind";
import styles from "./Filter.module.scss";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Checkboxes } from "~/components/Input";
import { useState } from "react";

const cx = classNames.bind(styles);

function Filter({ title, open = false }) {
    const [isShow, setShow] = useState(open);
    return (
        <div className={cx("wrapper")}>
            <div onClick={() => setShow(!isShow)} className={cx("filter-title")}>
                <h3>{title}</h3>
                {isShow && <FontAwesomeIcon icon={faChevronUp} />}
                {!isShow && <FontAwesomeIcon icon={faChevronDown} />}
            </div>
            {isShow && (
                <div className={cx("checkboxes-filter")}>
                    <Checkboxes />
                </div>
            )}
        </div>
    );
}

export default Filter;