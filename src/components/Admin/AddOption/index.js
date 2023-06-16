import classNames from "classnames/bind";
import styles from "./AddOption.module.scss";
import Counter from "~/components/Counter";
import Button from "~/components/Common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Message from "~/components/Portal/Message";
import { ERROR } from "~/constant";

const cx = classNames.bind(styles);
function AddOption({ value: valueParent, onAdd, name }) {
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const [message, setMessage] = useState(false);
    const handleOnClick = (e) => {
        e.preventDefault();
        if (color && size) {
            onAdd([...valueParent, {
                color,
                size,
                quantity
            }]);
            setQuantity(1);
            setColor("");
            setSize("");
        }
        else {
            setMessage(true);
        }
    }

    useEffect(() => {
        if (message) {
            const timerId = setTimeout(() => {
                setMessage(false);
            }, 2000);

            return () => clearTimeout(timerId);
        }
    }, [message]);


    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <span className={cx("title")}>{name}</span>
                <input value={color} onChange={(e) => setColor(e.target.value)} className={cx("input")} type="text" placeholder="Màu sắc" />
                <input value={size} onChange={(e) => setSize(e.target.value)} className={cx("input")} type="text" placeholder="Size" />
                <Counter value={quantity} onChange={setQuantity} />
                <Button onClick={(e) => handleOnClick(e)} primary>Thêm</Button>
            </div>
            {valueParent.length > 0 && <table className={cx("table")}>
                <thead>
                    <tr className={cx("tbl-rows")}>
                        <th>STT</th>
                        <th>Màu sắc</th>
                        <th>Size</th>
                        <th>Số lượng</th>
                        <th>Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    {valueParent.map((item, index) => <tr key={index} className={cx("tbl-rows")}>
                        <td>1</td>
                        <td>{item.color}</td>
                        <td>{item.size}</td>
                        <td>{item.quantity}</td>
                        <td><FontAwesomeIcon icon={faTrash} /></td>
                    </tr>)}
                </tbody>
            </table>}
            {message && <Message type={ERROR} message="Vui lòng thêm đầy đủ thông tin" />}
        </div>
    );
}

export default AddOption;