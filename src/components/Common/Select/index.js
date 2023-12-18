import classNames from "classnames/bind";
import styles from "./Select.module.scss";

const cx = classNames.bind(styles);

function Select({ title, options, value, onSelect, half = false }) {
    return (
        <div className={cx("wrapper")}>
            <label htmlFor="select">{title}</label>

            <select className={cx("select", {half})} value={value} onChange={(e) => onSelect(e.target.value)}  name="select" id="select">
                {options.map((option, index) => <option className={cx('option')} key={index} value={option.id}>{option.value}</option>)}
            </select>
        </div>
    );
}

export default Select;