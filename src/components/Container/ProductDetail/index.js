import classNames from "classnames/bind";
import styles from "./ProductDetail.module.scss";
import Button from "~/components/Common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Rating from "~/components/Rating";
import Filter from "~/components/Filter";
import Radio from "~/components/Radio";
import Counter from "~/components/Counter";
import { useContext, useEffect, useState } from "react";
import { ProductContext, UserContext } from "~/store";
import { Link, useNavigate } from "react-router-dom";
import Thumbnails from "~/components/Common/Thumbnails";
import axios from "axios";
import { productActions } from "~/store/actions";
import { SUCCESS } from "~/constant";
import Message from "~/components/Portal/Message";
import { createPortal } from "react-dom";
import Favourite from "~/components/Common/Favourite";

const cx = classNames.bind(styles);

function ProductDetail({ param }) {
    const navigate = useNavigate();
    const [showMessage, setShowMessage] = useState(false);
    const [user] = useContext(UserContext);
    let idCart;
    if (user) {
        idCart = user.cart;
    }
    const [count, setCount] = useState(1);
    const [color, setColor] = useState(0);
    const [size, setSize] = useState(0);
    const [state, dispatch] = useContext(ProductContext);
    const products = state.products;
    const product = products.find(product => product.idproduct === +param);
    //const startsWidth = 100 - product.rating.rate * 20;
    const [category, setCategory] = useState('');

    useEffect(() => {
        const timerId = setTimeout(() => {
            setShowMessage(false);
        }, 2000);

        return () => clearTimeout(timerId);
    }, [showMessage]);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/categories/${product.category_id}`)
            .then(response => setCategory(response.data.name))
            .catch(err => console.error(err));
    }, [])

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
                    dispatch(productActions.setCart({ quantity: response.data.quantity, totalPrice: response.data.totalPrice }));
                    setShowMessage({
                        type: SUCCESS,
                        isShow: true,
                        message: 'Đã thêm sản phẩm vào giỏ hàng.'
                    });
                })
                .catch((error) => console.log(error));
        }
        else {
            navigate("/login")
        }
    }

    return (
        <>
            <Thumbnails data={product.thumbnails} />

            <div className={cx("info")}>
                <div className={cx("title")}>
                    <div>
                        <h3>{product.title}</h3>
                        <div className={cx("title-bottom")}>
                            {/*<Rating startsWidth={startsWidth} icon={faStar} />*/}
                            <Link className={cx("link-item")} to={`/collection/${product.category_id}`}>{category}</Link>
                            <span>Đã bán: 500</span>
                        </div>
                    </div>
                    
                    <Favourite idProduct={product.idproduct} />
                </div>
                <div className={cx("price")}>
                    <span className={cx("current-price")}>{product.price}</span>
                    <del className={cx("origin-price")}>20$</del>
                    <div className={cx("promotion")}>-25%</div>
                </div>
                <div className={cx("color")}>
                    <p>Màu sắc</p>
                    <Radio idProduct={product.idproduct} type='colors' active={color} setActive={setColor} />
                </div>

                <div className={cx("size")}>
                    <p>Kích thước</p>
                    <Radio idProduct={product.idproduct} type='sizes' active={size} setActive={setSize} />
                </div>

                <div className={cx("quantity")}>
                    <p>Số lượng</p>
                    <Counter value={count} onChange={setCount} />
                </div>

                <div className={cx("product-detail-btn")}>
                    <Button onClick={handleAddToCart} primary>Thêm vào giỏ</Button>
                    <Button primary>Mua ngay</Button>
                </div>

                <div className={cx("extend-product")}>
                    <Filter title="Mô tả sản phẩm" data={product.description} />
                    <Filter title="Bảng chọn Size" data="size"></Filter>
                </div>
            </div>

            {showMessage.isShow && createPortal(
                <Message type={showMessage.type} message={showMessage.message} />,
                document.body
            )}
        </>
    );
}

export default ProductDetail;