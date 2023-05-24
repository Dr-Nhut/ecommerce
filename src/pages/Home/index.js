import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Banner from "~/components/Layout/Banner";
import Button from "~/components/Button";
import { banner1, banner2, banner3, bag, jacket, tshirt, outstanding } from "~/assets/images";
const banner = [banner1, banner2, banner3];


const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("banner")}>
                <Banner data={banner} title="This brand was born for you" btnName="Shop Now" placement="top-left" />
            </div>
            <div className={cx("home-collections")}>
                <div className={cx("collection")}>
                    <img className={cx("collection-img")} src={tshirt} alt="Áo thun"></img>
                    <div className={cx("collection-box")}>
                        <h1 className={cx("collection-title")}>Áo thun</h1>
                        <Button className={cx("more-button")} to="/product/t-shirt" outline size="large">Xem thêm</Button>
                    </div>
                </div>
                <div className={cx("collection")}>
                    <img className={cx("collection-img")} src={jacket} alt="Áo thun"></img>
                    <div className={cx("collection-box")}>
                        <h1 className={cx("collection-title")}>Áo khoác</h1>
                        <Button className={cx("more-button")} to="/product/jacket" outline size="large">Xem thêm</Button>
                    </div>
                </div>
                <div className={cx("collection")}>
                    <img className={cx("collection-img")} src={bag} alt="Áo thun"></img>
                    <div className={cx("collection-box")}>
                        <h1 className={cx("collection-title")}>Túi xách</h1>
                        <Button className={cx("more-button")} to="/product/bag" outline size="large">Xem thêm</Button>
                    </div>
                </div>
                <div className={cx("collection")}>
                    <img className={cx("collection-img")} src={outstanding} alt="Áo thun"></img>
                    <div className={cx("collection-box")}>
                        <h1 className={cx("collection-title")}>Nổi bật</h1>
                        <Button className={cx("more-button")} to="/product/outstanding" outline size="large">Xem thêm</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;