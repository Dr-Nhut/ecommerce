import classNames from "classnames/bind";
import styles from "./Item.module.scss";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "~/components/Common/Button";
import { useEffect, useState } from "react";
import Alert from "~/components/Portal/Alert";
import { createPortal } from "react-dom";
import Modal from "~/components/Modal";
import Message from "~/components/Portal/Message";

const cx = classNames.bind(styles);
function Item({ value, onDelete }) {
    const [showMessage, setShowMessage] = useState('');
    const [showPortal, setShowPortal] = useState(false);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setShowMessage('');
        }, 2000)

        return () => clearTimeout(timerId);
    }, [showMessage]);
    return (
        <div className={cx("wrapper")}>
            <img className={cx("thumbnail")} src={`http://localhost:5000/${value.thumbnail}`} alt="thumbnail" />

            <div className={cx("info")}>
                {value.name}
            </div>
            <div className={cx("footer")} >
                <Button className={cx("action")} size="small" onlyIcon={true} icon={faEdit} to={`./${value.idcategory}/edit`}>
                </Button>
                <Button className={cx("action")} onlyIcon={true} icon={faTrash} onClick={() => setShowPortal(true)}>
                </Button>
            </div>

            {showPortal && createPortal(
                <Modal isShow={setShowPortal}>
                    <Alert type='categories' onDelete={onDelete} isShow={setShowPortal} message={`Bạn có chắc muốn xóa ${value.name} không?`} id={value.idcategory} isShowMessage={setShowMessage} />
                </Modal>,
                document.body
            )}

            {showMessage.isShow && createPortal(
                <Message type={showMessage.status} message={showMessage.message} />,
                document.body
            )}
        </div>
    );
}

export default Item;