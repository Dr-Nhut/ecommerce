import classNames from "classnames/bind";
import styles from "./ProductDetail.module.scss";
import Button from "~/components/Common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { colorsRadio, sizesRadio } from "~/constant";
import Rating from "~/components/Rating";
import Filter from "~/components/Filter";
import Radio from "~/components/Radio";
import Counter from "~/components/Counter";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "~/store";
import { Link } from "react-router-dom";
import Thumbnails from "~/components/Common/Thumbnails";
import axios from "axios";

const cx = classNames.bind(styles);

function ProductDetail({param}) {
    const [count, setCount] = useState(1);
    const [state] = useContext(ProductContext);
    const products = state.products;
    const product = products.find(product => product.idproduct === +param);
    //const startsWidth = 100 - product.rating.rate * 20;
    const [category, setCategory] = useState('');
    useEffect(() => {
        axios.get(`http://localhost:5000/api/categories/${product.category_id}`)
            .then(response => setCategory(response.data.name))
            .catch(err => console.error(err));
    })
    return (
        <>
            <Thumbnails data={product.thumbnails}/>

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
                    <Counter value={count} onChange={setCount} />
                </div>

                <div className={cx("product-detail-btn")}>
                    <Button primary>Thêm vào giỏ</Button>
                    <Button primary>Mua ngay</Button>
                </div>

                <div className={cx("extend-product")}>
                    <Filter title="Mô tả sản phẩm" data={product.description} />
                    <Filter title="Bảng chọn Size" data="size"></Filter>
                </div>
            </div>
        </>
    );
}

export default ProductDetail;