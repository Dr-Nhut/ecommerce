import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Banner from "~/components/Layout/Banner";
import Product from "~/components/Product";
import { banner1, banner2, banner3, bag, jacket, tshirt, outstanding } from "~/assets/images";
import { useEffect, useState } from "react";
const banner = [banner1, banner2, banner3];


const cx = classNames.bind(styles);

function Home() {
    let [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => setProducts(json));
    }, [])

    return (
        <div className={cx("wrapper")}>
            <div className={cx("banner")}>
                <Banner data={banner} title="This brand was born for you" btnName="Khám phá ngay" btnTo="/product" placement="top-left" />
            </div>
            <div className={cx("home-collections")}>
                <Banner className={cx("collection")} data={[tshirt]} title="Áo thun" btnName="Xem thêm" btnTo="/product/tshirt" penetration />
                <Banner className={cx("collection")} data={[jacket]} title="Áo khoác" btnName="Xem thêm" btnTo="/product/jacket" penetration />
                <Banner className={cx("collection")} data={[bag]} title="Túi xách" btnName="Xem thêm" btnTo="/product/bag" penetration />
                <Banner className={cx("collection")} data={[outstanding]} title="Nổi bật" btnName="Xem thêm" btnTo="/product/outstanding" penetration />
            </div>
            <div className={cx("home-featured-product")}>
                <div>
                    <div className={cx("section-title")}>
                        <span>Sản phẩm nổi bật</span>
                    </div>

                    <div className={cx("featured-product")}>
                        {products.splice(0, 8).map((product, index) =>
                            <div key={index} className={cx("featured-product-item")}>
                                <Product product={product} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;