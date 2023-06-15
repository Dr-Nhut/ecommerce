import classNames from "classnames/bind";
import styles from "./ProductDetail.module.scss";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "~/store";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { colorsRadio, sizesRadio } from "~/constant";
import Rating from "~/components/Rating";
import Filter from "~/components/Filter";
import Radio from "~/components/Radio";
import Counter from "~/components/Counter";

const cx = classNames.bind(styles);



function ProductDetail() {
    const products = useContext(ProductContext);
    const params = useParams();
    const product = products[params.productId - 1];
    const startsWidth = 100 - product.rating.rate * 20;

    return (
        <div className={cx("wrapper")}>
            <div className={cx("thumbnail")}>
                <img src={product.thumbnail} alt="Thumbnail"></img>
            </div>

            <div className={cx("info")}>
                <div className={cx("title")}>
                    <div>
                        <h3>{product.title}</h3>
                        <div className={cx("title-bottom")}>
                            <Rating startsWidth={startsWidth} icon={faStar} />
                            <Link className={cx("link-item")} to={`/collection/${product.category}`}>{product.category}</Link>
                            <span>Đã bán: 500</span>
                        </div>
                    </div>
                    <Button square primary>
                        <FontAwesomeIcon icon={faHeart} />
                    </Button>
                </div>
                <div className={cx("price")}>
                    <span className={cx("current-price")}>{product.price}</span>
                    <del className={cx("origin-price")}>20$</del>
                    <div className={cx("promotion")}>-25%</div>
                </div>
                <div className={cx("color")}>
                    <span>Màu sắc</span>
                    <Radio data={colorsRadio} />
                </div>

                <div className={cx("size")}>
                    <span>Kích thước</span>
                    <Radio data={sizesRadio} />
                </div>

                <div className={cx("quantity")}>
                    <span>Số lượng</span>
                    <Counter />
                </div>

                <div className={cx("product-detail-btn")}>
                    <Button primary>Thêm vào giỏ</Button>
                    <Button primary>Mua ngay</Button>
                </div>

                <div className={cx("extend-product")}>
                    <Filter title="Chi tiết sản phẩm" data={product.description} />
                    <Filter title="Bảng chọn Size" data="size"></Filter>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;