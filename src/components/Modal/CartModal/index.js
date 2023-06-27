import classNames from "classnames/bind";
import styles from "./CartModal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "~/components/Common/Button";
import { faCartPlus, faClose } from "@fortawesome/free-solid-svg-icons";
import Rating from "~/components/Rating";
import Radio from "~/components/Radio";
import Counter from "~/components/Counter";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Thumbnails from "~/components/Common/Thumbnails";
import { ProductContext, UserContext } from "~/store";
import { productActions } from "~/store/actions";
import { useNavigate } from "react-router-dom";
import { ERROR } from "~/constant";
import { createPortal } from "react-dom";
import Message from "~/components/Portal/Message";

const cx = classNames.bind(styles);

function CartModal({ product, isShow }) {
    const navigate = useNavigate();
    const [user] = useContext(UserContext);
    let idCart;
    if (user) {
        idCart = user.cart;
    }
    const [count, setCount] = useState(1);
    const [color, setColor] = useState(0);
    const [size, setSize] = useState(0);
    const [state, dispatch] = useContext(ProductContext);
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${product.idproduct}/rating`)
            .then((response) => dispatch(productActions.setRating(product.idproduct, response.data)))
            .catch(err => console.error(err));

        axios.get(`http://localhost:5000/api/products/${product.idproduct}/colors`)
            .then((response) => dispatch(productActions.setColors(product.idproduct, response.data)))
            .catch(err => console.error(err));

        axios.get(`http://localhost:5000/api/products/${product.idproduct}/sizes`)
            .then((response) => dispatch(productActions.setSizes(product.idproduct, response.data)))
            .catch(err => console.error(err));
    }, [product, dispatch]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setShowMessage(false);
        }, 2000);

        return clearTimeout(timerId);
    }, [showMessage])
    let rating;
    if (state.rate[product.idproduct]) {
        rating = state.rate[product.idproduct][0]
    };
    const colors = state.colors[product.idproduct];
    const sizes = state.sizes[product.idproduct];

    const startsWidth = 100 - rating * 20;

    const handleAddToCart = () => {
        const cartItem = {
            idproduct: product.idproduct,
            color: color || colors[0],
            size: size || sizes[0],
            count
        }
        if (idCart) {
            axios.post(`http://localhost:5000/api/cart/${idCart}`, cartItem)
                .then((response) => {
                    if (response.data.status !== 'ERROR') {
                        isShow(false);
                        dispatch(productActions.setCart({quantity: response.data.quantity, totalPrice: response.data.totalPrice}));
                    }
                    else {
                        setShowMessage({
                            type: ERROR,
                            isShow: true,
                            message: response.data.message
                        });
                    }
                })
                .catch((error) => console.log(error));
        }
        else {
            navigate("/login")
        }
        isShow(false);
    }

    return (
        <div onClick={(e) => e.stopPropagation()} className={cx("wrapper")}>
            <Thumbnails data={product.thumbnails} noneOptions />
            <div className={cx("info-container")}>
                <div className={cx("header")}>
                    <div className={cx("header-content")}>
                        <h3 className={cx("title")}>{product.title}</h3>
                        <div className={cx("rating")}>
                            <span className={cx("rating-number")}>{rating}</span>
                            <Rating startsWidth={startsWidth} />
                        </div>
                    </div>
                    <div className={cx("close-btn")} onClick={() => isShow(false)}>
                        <FontAwesomeIcon icon={faClose} />
                    </div>
                </div>
                <div className={cx("price")}>
                    <span>{product.price}đ</span>
                    <span className={cx("product-compare-price")}><del>{product.comparePrice || "10"}đ</del></span>
                </div>

                <div className={cx("color")}>
                    <p>Màu sắc</p>
                    <div className={cx("color-radio")}>
                        {colors && <Radio active={color} setActive={setColor} data={colors} />}
                    </div>
                </div>

                <div className={cx("size")}>
                    <p>Size</p>
                    <div className={cx("color-radio")}>
                        {sizes && <Radio active={size} setActive={setSize} data={sizes} />}
                    </div>
                </div>

                <div className={cx("quantity")}>
                    <p>Số lượng</p>
                    <Counter value={count} onChange={setCount} />
                </div>

                <div className={cx("footer")}>
                    <Button onClick={handleAddToCart} primary icon={faCartPlus}>Thêm vào giỏ</Button>
                    <Button primary >Mua ngay</Button>
                </div>
            </div>

            {showMessage.isShow && createPortal(
                <Message type={showMessage.type} message={showMessage.message} />,
                document.body
            )}
        </div >
    );
}

export default CartModal;