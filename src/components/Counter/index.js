import classNames from "classnames/bind";
import styles from "./Counter.module.scss"
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Counter({value, onChange}) {

    const handleValue = (value) => {
        isNaN(+value) ? onChange(1) : onChange(value);
    }

    const handleBlur = () => {
        if (!value) {
            onChange(1);
        }
    }
    return (
        <div className={cx("wrapper")}>
            <Button size="micro" text onClick={(e) => {
                e.preventDefault();
                onChange(pre => pre > 1 ? pre - 1 : pre)
            }} >
                <FontAwesomeIcon icon={faMinus} />
            </Button>
            <div onBlur={handleBlur} className={cx("number-input")}>
                <input onChange={(e) => handleValue(e.target.value)} type="text" value={value}></input>
            </div>
            <Button size="micro" text onClick={(e) => {
                e.preventDefault();
                onChange(pre => +pre + 1)
            }}>
                <FontAwesomeIcon icon={faPlus} />
            </Button>
        </div>
    );
}

export default Counter;