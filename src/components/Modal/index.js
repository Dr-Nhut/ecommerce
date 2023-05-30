import classNames from "classnames/bind";
import styles from "./Modal.module.scss";

const cx = classNames.bind(styles);

function Modal({ children, isShow }) {
    return (
        <div onClick={() => isShow(false)} className={cx("wrapper")}>
            {children}
        </div>
    );
}

export default Modal;