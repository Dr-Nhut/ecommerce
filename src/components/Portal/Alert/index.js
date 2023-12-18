import classNames from "classnames/bind";
import styles from "./Alert.module.scss";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "~/components/Common/Button";
import axios from "axios";

const cx = classNames.bind(styles);
function Alert({ type, message, isShow, id, isShowMessage, onDelete }) {
    const handleDelete = () => {
        axios.delete(`http://localhost:5000/api/${type}/${id}`)
            .then((response) => {
                isShow(false);
                if(onDelete) {
                    onDelete(pre => pre + 1);
                }
                isShowMessage({
                    isShow: true,
                    type: response.data.status,
                    message: response.data.message
                })
            })
            .catch(err => console.error(err))
    }
    return (
        <div onClick={(e) => e.stopPropagation()} className={cx("wrapper")}>
            <div className={cx("header")}>
                {message}
            </div>
            <div className={cx("container")}>
                <Button onClick={() => isShow(false)} text >Hủy</Button>
                <Button onClick={handleDelete} destroy icon={faTrash}>OK</Button>
            </div>
        </div >
    );
}

export default Alert;