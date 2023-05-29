import { hooks } from "~/store";
import styles from "./RadioInput.module.scss"
import Button from "~/components/Button";
import { useState } from "react";

const cx = hooks.useStyles(styles);

function RadioInput({ data }) {
    const [active, setActive] = useState(0);
    return (
        <div className={cx("wrapper")}>
            {
                data.map((color, index) => {
                    let selected;
                    (index === active) ? selected = true : selected = false;
                    return <Button size="small" key={index} onClick={() => setActive(index)} selected={selected} text>{color}</Button>
                })
            }
        </div>
    );
}

export default RadioInput;