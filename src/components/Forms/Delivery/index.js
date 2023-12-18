import classNames from "classnames/bind";
import styles from "./Delivery.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ProductContext, UserContext } from "~/store";
import { Radio } from "~/components/Radio";
import { Link, useNavigate } from "react-router-dom";
import Button from "~/components/Common/Button";
import axios from "axios";

const cx = classNames.bind(styles);

const options = [
    {
        value: 0,
        label: 'Thanh toán khi nhận hàng'
    },
    {
        value: 1,
        label: 'Thanh toán qua Stripe'
    }
]

function Delivery({ products, onChange, method, setMethod }) {
    const navigative = useNavigate();
    const [productState] = useContext(ProductContext);
    const [user] = useContext(UserContext);
    

    const handleCheckout = () => {
        if (method === 0) {
            axios.post('http://localhost:5000/api/checkout', {cart: productState.cart, products})
                .then((response) => navigative('/checkout-success', {state: response.data.status}))
                .catch(err => console.error(err));
        }
        else {
            axios.post('http://localhost:5000/api/stripe/create-checkout-session', {products})
                .then(response => {
                    if(response.data.url) {
                        localStorage.setItem('stripe_checkout_id', response.data.id);
                        window.location.href = response.data.url;
                    }
                 })
                .catch(err => console.error(err));
        }
    }

    return (
        <>
            <div className={cx('address')}>
                <div className={cx('header')}>
                    <div className={cx('title')}>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <h3>Địa chỉ nhận hàng</h3>
                    </div>
                    <FontAwesomeIcon onClick={() => {onChange(true)}} className={cx('edit-address')} icon={faPenToSquare} />
                </div>
                <div className={cx('content')}>
                    <p>Họ và tên: {user.fullName}</p>
                    <p>Số điện thoại: {user.phone}</p>
                    <i>Địa chỉ: {user.address}</i>
                </div>
            </div>

            <div className={cx('checkout')}>
                <h3>Phương thức thanh toán</h3>
                <div className={cx("delivery-method")}>
                    <Radio options={options} group='delivery' value={method} onChange={setMethod} />
                </div>
            </div>

            <div className={cx('actions')}>
                <Link className={cx("link")} to="/cart">Giỏ hàng</Link>
                <Button onClick={handleCheckout} type="submit" primary>Xác nhận</Button>
            </div>
        </>
    );
}

export default Delivery;