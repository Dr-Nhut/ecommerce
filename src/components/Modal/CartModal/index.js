import classNames from "classnames/bind";
import styles from "./CartModal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "~/components/Button";
import { faCartPlus, faClose, faStar} from "@fortawesome/free-solid-svg-icons";
import { NumberInput, RadioInput } from "~/components/Input";

const cx = classNames.bind(styles);


const colors = [
    "Trắng tay đen",
    "Be tay nâu",
    "Trắng tay xanh",
    "Xám tay đen"
]

const sizes = [
    "S",
    "M",
    "L",
    "XL"
]

function CartModal({ product, isShow }) {
    const startsWidth = 100 - product.rating.rate * 20;

    return (
        <div className={cx("wrapper")}>
            <div className={cx("thumbnail-container")}>
                <img src={product.image} alt="product" />
            </div>
            <div className={cx("info-container")}>
                <div className={cx("header")}>
                    <div className={cx("header-content")}>
                        <h3 className={cx("title")}>{product.title}</h3>
                        <div className={cx("rating")}>
                            <span className={cx("rating-number")}>{product.rating.rate}</span>
                            <div className={cx("rating-star")}>
                                <FontAwesomeIcon className={cx("star")} icon={faStar} />
                                <FontAwesomeIcon className={cx("star")} icon={faStar} />
                                <FontAwesomeIcon className={cx("star")} icon={faStar} />
                                <FontAwesomeIcon className={cx("star")} icon={faStar} />
                                <FontAwesomeIcon className={cx("star")} icon={faStar} />
                                <div className={cx("overlay")} style={{width: `${startsWidth}%`}}></div>
                            </div>
                        </div>
                    </div>
                    <div className={cx("close-btn")} onClick={() => isShow(false)}>
                        <FontAwesomeIcon icon={faClose} />
                    </div>
                </div>
                <div className={cx("price")}>
                    <span>{product.price}$</span>
                    <span className={cx("product-compare-price")}><del>{product.comparePrice || "10"}$</del></span>
                </div>

                <div className={cx("color")}>
                    <p>Màu sắc</p>
                    <div className={cx("color-radio")}>
                        <RadioInput data={colors} />
                    </div>
                </div>

                <div className={cx("size")}>
                    <p>Size</p>
                    <div className={cx("color-radio")}>
                        <RadioInput data={sizes} />
                    </div>
                </div>

                <div className={cx("quantity")}>
                    <p>Số lượng</p>
                    <NumberInput />
                </div>

                <div className={cx("footer")}>
                    <Button primary icon={faCartPlus}>Thêm vào giỏ</Button>
                    <Button primary >Mua ngay</Button>
                </div>
            </div>
        </div >
    );
}

export default CartModal;