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

    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${product.idproduct}/rating`)
            .then((response) => dispatch(productActions.setRating(product.idproduct, response.data)))
            .catch(err => console.error(err));
    }, [product, dispatch]);

    let rating;
    if (state.rate[product.idproduct]) {
        rating = state.rate[product.idproduct][0]
    };

    const startsWidth = 100 - rating * 20;

    const handleAddToCart = () => {
        const cartItem = {
            idproduct: product.idproduct,
            color,
            size,
            count
        }
        if (idCart) {
            axios.post(`http://localhost:5000/api/cart/${idCart}`, cartItem)
                .then((response) => {
                    isShow(false);
                    dispatch(productActions.setCart({ quantity: response.data.quantity, totalPrice: response.data.totalPrice }));
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
                    <Radio idProduct={product.idproduct} type='colors' active={color} setActive={setColor} />
                </div>

                <div className={cx("size")}>
                    <p>Size</p>
                    <Radio idProduct={product.idproduct} type='sizes' active={size} setActive={setSize} />
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
        </div >
    );
}

export default CartModal;