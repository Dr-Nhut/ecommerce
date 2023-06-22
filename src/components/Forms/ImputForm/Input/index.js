import classNames from "classnames/bind";
import styles from "./Input.module.scss";
import { memo } from "react";

const cx = classNames.bind(styles);

function Input({ type, value, label, id, placeholder, handleChange }) {
    let validLabel;
    if(value) {
        validLabel = 'valid';
    }
    return (
        <div className={cx("wrapper")}>
            <input 
                id={id} 
                type={type} 
                name={id} 
                className={cx("input")}  
                value={value} 
                onChange={(e) => handleChange(e.target.value)} 
                placeholder={placeholder} 
            />
            <label className={cx("label", validLabel)} htmlFor={id} >{label}</label>
        </div>
    );
}

export default memo(Input);