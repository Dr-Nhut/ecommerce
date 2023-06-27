import classNames from "classnames/bind";
import styles from "./CartItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Counter from "~/components/Counter";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { productActions } from "~/store/actions";
import { ProductContext } from "~/store";

const cx = classNames.bind(styles);

function CartItem({ data, idCart }) {
    const [state, dispatch] = useContext(ProductContext)
    const [count, setCount] = useState(data.quantity)
    const prevCountRef = useRef(data.quantity);
    useEffect(() => {
        const changeQuantity = count - prevCountRef.current;
        const totalChange = changeQuantity * data.product_price;
        axios.post(`http://localhost:5000/api/cart/${idCart}/update?idCartDetail=${data.idCartDetail}`, { totalChange, currentQuantity: count })
            .then(() => {
                dispatch(productActions.changeQuantityItem(totalChange));
                prevCountRef.current = count;
            })
            .catch(err => console.error(err));
    }, [count, idCart])

    const handleOnClick = () => {
        axios.delete(`http://localhost:5000/api/cart/${idCart}/item?idCartDetail=${data.idCartDetail}`)
            .then((response) => {
                dispatch(productActions.setCart({quantity: response.data.quantity, totalPrice: response.data.totalPrice}));
            })
    }

    return (
        <tr className={cx("wrapper")}>
            <td><img className={cx("thumbnail")} src={`http://localhost:5000/${data.product_thumbnail}`} alt="Hinh anh" /></td>
            <td className={cx("t-data")}>
                <h3>{data.product_name}</h3>
                <p>{data.color}</p>
                <p>{data.size}</p>
            </td>
            <td className={cx("t-data", "price")}><b>{`${data.product_price}đ`}</b></td>
            <td className={cx("t-data")}><Counter value={count} onChange={setCount} /></td>
            <td className={cx("t-data", "price")}><b>{`${data.product_price * count}đ`}</b></td>
            <td onClick={handleOnClick} className={cx("t-data", "trash")}><FontAwesomeIcon icon={faTrash} /></td>
        </tr>
    );
}

export default CartItem;