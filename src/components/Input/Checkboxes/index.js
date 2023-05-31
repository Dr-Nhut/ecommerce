import classNames from "classnames/bind";
import styles from "./Checkboxes.module.scss";
import { useState, useContext } from "react";
import { FilterContext } from "~/components/Layout/Sidebar";

const cx = classNames.bind(styles);

function Checkboxes() {
    const [data, filters, handleFilters] = useContext(FilterContext);
    const initState = data.map(item => filters.includes(item.value));
    const [checkedStates, setCheckedStates] = useState(initState);

    const handleChecked = (position) => {
        checkedStates[position] ?
            handleFilters(pre => pre.filter(item => item !== data[position].value)) :
            handleFilters(pre => [...pre, data[position].value]);

        const newState = checkedStates.map((item, index) => index === position ? !item : item);
        setCheckedStates(newState);
    }

    return (
        <div className={cx("wrapper")}>
            {
                data.map((item, index) => {
                    return (
                        <div className={cx("checkbox-container")} key={index}>
                            <input className={cx("checkbox-input")} id={`price-checkbox-${item.value}`} type="checkbox" name={item.type} value={item.value} checked={checkedStates[index]} onChange={() => handleChecked(index)}></input>
                            <label className={cx("title-input")} htmlFor={`price-checkbox-${item.value}`}>{item.value}</label>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Checkboxes;