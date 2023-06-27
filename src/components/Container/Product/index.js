import classNames from "classnames/bind";
import styles from "./Product.module.scss"
import Button from "~/components/Common/Button";
import Modal from "~/components/Modal";
import CartModal from "~/components/Modal/CartModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { createPortal } from "react-dom";
import Favourite from "~/components/Common/Favourite";

const cx = classNames.bind(styles);

function Product({ product }) {
    const [showModal, setShowModal] = useState(false);

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
                <Favourite idProduct={product.idproduct} />

                <Button onClick={() => setShowModal(true)} whiteBackground square >
                    <FontAwesomeIcon icon={faCartPlus} />
                </Button>
                <Button square whiteBackground to={`/product/${product.idproduct}`}>
                    <FontAwesomeIcon icon={faEye} />
                </Button>
            </div>

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