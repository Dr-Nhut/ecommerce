import classNames from "classnames/bind";
import styles from "./Filter.module.scss";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Checkboxes from "~/components/Checkboxes";

const cx = classNames.bind(styles);

function Filter({ title, open = false, data, checkbox = false }) {
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
                    {checkbox ? <Checkboxes data={data}/> : data }
                </div>
            )}
        </div>
    );
}

export default Filter;