import classNames from "classnames/bind";
import styles from "./Product.module.scss"
import Button from "~/components/Common/Button";
import Message from "~/components/Portal/Message";
import Modal from "~/components/Modal";
import CartModal from "~/components/Modal/CartModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ProductContext } from "~/store";
import { SUCCESS } from "~/constant";
import { productActions } from "~/store/actions";

const cx = classNames.bind(styles);

function Product({ product }) {
    const [state, dispatch] = useContext(ProductContext);
    const favourites = state.favourites;
    const cart = state.cart;
    const [showModal, setShowModal] = useState(false);
    const [messageFav, setMessageFav] = useState({
        isShow: false,
        message: ""
    });

    const favEleClass = favourites[product.idproduct] ? "active" : null;
    const carEleClass = cart[product.idproduct] ? "active" : null;

    useEffect(() => {
        if (messageFav.isShow) {
            const timerId = setTimeout(() => {
                setMessageFav({
                    isShow: false,
                    message: ""
                });
            }, 2000);

            return () => clearTimeout(timerId);
        }
    }, [messageFav.isShow]);

    const handleFav = () => {
        if (!favourites[product.idproduct]) {
            dispatch(productActions.addToFavourite(product.idproduct));
            setMessageFav({
                isShow: true,
                message: "Sản phẩm đã được thêm vào mục yêu thích"
            });
        }
        else {
            dispatch(productActions.removeToFavourite(product.idproduct));
            setMessageFav({
                isShow: true,
                message: "Sản phẩm đã được xóa khỏi mục yêu thích"
            });
        }
    }

    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <div className={cx("product-img")}>
                    <img src={`http://localhost:5000/${product.thumbnails.split(',')[0]}`} alt="product" />
                </div>
                <div className={cx("product-info")}>
                    <span className={cx("product-name")}>{product.title}</span>
                    <div className={cx("product-price")}>
                        <span>{product.price}đ</span>
                        <span className={cx("product-compare-price")}><del>{product.comparePrice || "10"}đ</del></span>
                    </div>
                </div>
            </div>

            <div className={cx("promotional")}>
                <span>{product.promotion || "25%"}</span>
            </div>

            <div className={cx("action")}>
                <Button className={cx(favEleClass)} onClick={handleFav} whiteBackground square >
                    <FontAwesomeIcon icon={faHeart} />
                </Button>
                <Button className={cx(carEleClass)} onClick={() => setShowModal(true)} whiteBackground square >
                    <FontAwesomeIcon icon={faCartPlus} />
                </Button>
                <Button square whiteBackground to={`/product/${product.idproduct}`}>
                    <FontAwesomeIcon icon={faEye} />
                </Button>
            </div>
            {messageFav.isShow &&
                createPortal(
                    <Message type={SUCCESS} message={messageFav.message} />,
                    document.body
                )
            }

            {showModal &&
                createPortal(
                    <Modal isShow={setShowModal}>
                        <CartModal isShow={setShowModal} product={product}></CartModal>
                    </Modal>,
                    document.body
                )
            }
        </div >
    );
}

export default Product;