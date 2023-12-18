import classNames from "classnames/bind";
import styles from "../Tables.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import OrderStatus from "./OrderStatus";

const cx = classNames.bind(styles);

function OrdersTable({ page }) {
    const [orders, setOrders] = useState();

    useEffect(() => {
        axios.get('http://localhost:5000/api/orders/all')
            .then((response) => {setOrders(response.data)})
            .catch((err) => console.error(err));
    }, []);

    
    return (
        <table className={cx('wrapper')}>
            <thead className={cx('header')}>
                <tr>
                    <th>Khách hàng</th>
                    <th>Số lượng</th>
                    <th>Tổng cộng</th>
                    <th>Thanh toán</th>
                    <th>Địa chỉ</th>
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody className={cx('container')}>
                {orders && orders.map(order => {
                    return <tr className={cx("product-item","pointer")} key={order.id}>
                        <td>{order.emailUser}</td>
                        <td>{order.quantity} sản phẩm</td>
                        <td>{order.totalPrice}</td>
                        <td>{order.payment ? 'Đã thanh toán' : 'Chưa thanh toán'}</td>
                        <td className={cx("w-4")}>{order.address}</td>
                        <td className={cx("actions")}>
                            <OrderStatus data={order.status} id={order.id}/>
                        </td>
                    </tr>
                })
                }

            </tbody>
        </table>
    );
}

export default OrdersTable;