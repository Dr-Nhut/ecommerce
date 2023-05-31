import classNames from "classnames/bind";
import styles from "./Banner.module.scss";
import { useEffect, useState } from "react";
import Button from "~/components/Button";
const cx = classNames.bind(styles);

function Banner({ data, title, btnName, btnTo, placement = "center", penetration = false }) {
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
    const classes = cx("wrapper", { penetration })
    const btnClasses = cx("shop-btn", placement.split('-'));
    return (
        <div className={classes}>
            <img className={cx("banner-item")} src={data[index]} alt="banner" />
            <div className={btnClasses}>
                <h1 className={cx("slogan")}>{title}</h1>
                {btnName ? <Button className={cx("shop-now")} to={btnTo} outline size="large">{btnName}</Button> : true}
            </div>
        </div>

    );
}

export default Banner;