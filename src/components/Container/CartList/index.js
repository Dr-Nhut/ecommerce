import classNames from "classnames/bind";
import styles from "./CartList.module.scss";
import { ProductContext, UserContext } from "~/store";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import CartItem from "./CartItem";
import Button from "~/components/Common/Button";

const cx = classNames.bind(styles);

function CartList() {
    const [user] = useContext(UserContext);
    const [state, dispatch] = useContext(ProductContext);
    const idCart = user.cart;
    const countCart = state.cart.quantity;
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/api/cart/${idCart}/products`)
            .then((response) => {
                setItems(response.data);
            })
            .catch((error) => console.error(error));
    }, [state.cart, idCart])
    return (
        <div className={cx("wrapper")}>
            {countCart > 0 ?
                <div className={cx("table-title")}>
                    <Button primary>Trở lại</Button>
                    <h3>Có {countCart} sản phẩm trong giỏ hàng</h3>
                    <Button primary>Thanh Toán</Button>
                </div> :
                <div className={cx("table-title")}>
                    <Button primary>Trở lại</Button>
                    <h3>Chưa có sản phẩm nào trong giỏ hàng</h3>
                    <Button primary>Mua sắm ngay</Button>
                </div>
            }
            {countCart > 0 && <table className={cx("table-content")}>
                <thead className={cx('column-title')}>
                    <tr>
                        <th>Hình ảnh</th>
                        <th>Sản phẩm</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Tổng tiền</th>
                        <th>Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => {
                        return <CartItem key={index} data={item} idCart={idCart} />
                    })}
                </tbody>
            </table>}
        </div>
    );
}

export default CartList;