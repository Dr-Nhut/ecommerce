import classNames from "classnames/bind";
import styles from "./Radio.module.scss"
import Button from "~/components/Button";
import { useState } from "react";

const cx = classNames.bind(styles);

function Radio({ data }) {
    const [active, setActive] = useState(0);
    return (
        <div className={cx("wrapper")}>
            {
                data.map((element, index) => {
                    let selected;
                    (index === active) ? selected = true : selected = false;
                    return <Button size="small" key={index} onClick={() => setActive(index)} selected={selected} text>{element}</Button>
                })
            }
        </div>
    );
}

export default Radio;