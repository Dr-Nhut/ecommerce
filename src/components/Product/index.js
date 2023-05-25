import classNames from "classnames/bind";
import styles from "./Product.module.scss"
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Product({ product }) {
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
                <Button square outline>
                    <FontAwesomeIcon icon={faHeart} />
                </Button>
                <Button square outline>
                    <FontAwesomeIcon icon={faCartPlus} />
                </Button>
                <Button square outline>
                    <FontAwesomeIcon icon={faEye} />
                </Button>
            </div>
        </div>
    );
}

export default Product;