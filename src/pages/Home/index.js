import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Banner from "~/components/Layout/Banner";
import { banner1, banner2, banner3, bag, jacket, tshirt, outstanding } from "~/assets/images";
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
        </div>
    );
}

export default Home;