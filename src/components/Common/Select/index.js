import classNames from "classnames/bind";
import styles from "./Select.module.scss";

const cx = classNames.bind(styles);

function Select({ title, options, value, onSelect }) {
    return (
        <div className={cx("wrapper")}>
            <label htmlFor="select">{title}</label>

            <select value={value} onChange={(e) => onSelect(e.target.value)} className={cx("select")} name="select" id="select">
                {options.map((option, index) => <option className={cx('option')} key={index}  value={option.idcategory}>{option.name}</option>)}
            </select>
        </div>
    );
}

export default Select;