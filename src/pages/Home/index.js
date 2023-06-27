import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Banner from "~/components/Layout/Banner";
import { banner1, banner2, banner3, bag, jacket, tshirt, outstanding, bannerCentral } from "~/assets/images";
import Button from "~/components/Common/Button";
import Tabs from "~/components/Common/Tabs";
import ProductList from "~/components/Container/ProductList";
const banner = [banner1, banner2, banner3];


const cx = classNames.bind(styles);

function Home() {
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
                        <ProductList limit={8} />
                    </div>

                    <div className={cx("more-product")}>
                        <Button to="/product" primary>Xem tất cả</Button>
                    </div>
                </div>

                <div className={cx("banner-central")}>
                    <Banner data={[bannerCentral]} />
                </div>

                <div className={cx("home-collection-product")}>
                    <Tabs
                        navs={[{ title: "Mới nhất" }, { title: "Bán chạy nhất" }, { title: "Siêu khuyến mãi" }]}
                        outlet={
                            [
                                <ProductList limit={8} />,
                                <ProductList limit={8} />,
                                <ProductList limit={8} />
                            ]
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;