import classNames from "classnames/bind";
import styles from "./Banner.module.scss";
import { useEffect, useState } from "react";
import Button from "~/components/Button";
const cx = classNames.bind(styles);

function Banner({ data, title, btnName, placement = "center-center" }) {
    const [index, setIndex] = useState(0);
    const length = data.length;
    useEffect(() => {
        const timerId = setInterval(() => {
            if (index < length - 1) {
                setIndex(pre => pre + 1);
            }
            else {
                setIndex(0);
            }
        }, 5000);

        return () => clearInterval(timerId);
    }, [index, length])
    const classes = cx("shop-btn", placement.split('-'));
    return (
        <div className={cx("wrapper")}>
            <img className={cx("banner-item")} src={data[index]} alt="banner" />
            <div className={classes}>
                <h1 className={cx("slogan")}>{title}</h1>
                <Button className={cx("shop-now")} to="/product" outline size="large">{btnName}</Button>
            </div>
        </div>

    );
}

export default Banner;