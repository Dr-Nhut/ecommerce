import { hooks } from "~/store";
import styles from "./NumberInput.module.scss"
import Button from "~/components/Button";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const cx = hooks.useStyles(styles);

function Number({ data }) {
    const [value, setValue] = useState(1);

    const handleValue = (value) => {
        isNaN(+value) ? setValue(1) : setValue(value);
    }

    const handleBlur = () => {
        if (!value) {
            setValue(1);
        }
    }
    return (
        <div className={cx("wrapper")}>
            <Button size="micro" text onClick={() => setValue(pre => pre > 1 ? pre - 1 : pre)} >
                <FontAwesomeIcon icon={faMinus} />
            </Button>
            <div onBlur={handleBlur} className={cx("number-input")}>
                <input onChange={(e) => handleValue(e.target.value)} type="text" value={value}></input>
            </div>
            <Button size="micro" text onClick={() => setValue(pre => +pre + 1)}>
                <FontAwesomeIcon icon={faPlus} />
            </Button>
        </div>
    );
}

export default Number;