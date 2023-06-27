import classNames from "classnames/bind";
import styles from "./Radio.module.scss"
import Button from "~/components/Common/Button";

const cx = classNames.bind(styles);

function Radio({ data, active, setActive }) {
    if (active === 0) {
        active = data[0];
    }
    return (
        <div className={cx("wrapper")}>
            {
                data.map((element, index) => {
                    let selected;
                    (element === active) ? selected = true : selected = false;
                    return <Button size="small" key={index} onClick={() => setActive(element)} selected={selected} text>{element}</Button>
                })
            }
        </div>
    );
}

export default Radio;