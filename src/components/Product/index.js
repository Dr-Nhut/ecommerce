import classNames from "classnames/bind";
import styles from "./Product.module.scss"
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FavouriteContext, actions } from "~/store";
import Message from "../Message";
import { SUCSESS } from "~/constant";
const cx = classNames.bind(styles);
function Product({ product }) {
    const [messageFav, setMessageFav] = useState({
        isShow: false,
        message: ""
    });
    const [state, dispatch] = useContext(FavouriteContext);
    useEffect(() => {
        if (messageFav.isShow) {
            setTimeout(() => {
                setMessageFav({
                    isShow: false,
                    message: ""
                });
            }, 5000);
        }
    }, [messageFav.isShow])
    const classNameBtn = state[product.id] ? "active" : null;
    var handleFav;
    if (state[product.id] === 0) {
        handleFav = () => {
            dispatch(actions.addToFavourite(product.id));
            setMessageFav({
                isShow: true,
                message: "Sản phẩm đã được thêm vào mục yêu thích"
            });
        };
    }
    else {
        handleFav = () => {
            dispatch(actions.removeToFavourite(product.id));
            setMessageFav({
                isShow: true,
                message: "Sản phẩm đã được xóa khỏi mục yêu thích"
            });
        };
    }
    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <div className={cx("product-img")}>
                    <img src={product.image} alt="product" />
                </div>
                <div className={cx("product-info")}>
                    <span className={cx("product-name")}>{product.title}</span>
                    <div className={cx("product-price")}>
                        <span>{product.price}$</span>
                        <span className={cx("product-compare-price")}><del>{product.comparePrice || "10"}$</del></span>
                    </div>
                </div>
            </div>

            <div className={cx("promotional")}>
                <span>{product.promotion || "25%"}</span>
            </div>

            <div className={cx("action")}>
                <Button className={cx(classNameBtn)} onClick={() => handleFav()} square outline>
                    <FontAwesomeIcon icon={faHeart} />
                </Button>
                <Button square outline>
                    <FontAwesomeIcon icon={faCartPlus} />
                </Button>
                <Button square outline>
                    <FontAwesomeIcon icon={faEye} />
                </Button>
            </div>
            {messageFav.isShow &&
                createPortal(
                    <Message type={SUCSESS} message={messageFav.message} />,
                    document.body
                )
            }
        </div >
    );
}

export default Product;