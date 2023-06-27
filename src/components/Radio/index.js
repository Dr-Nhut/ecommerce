import classNames from "classnames/bind";
import styles from "./Radio.module.scss"
import Button from "~/components/Common/Button";
import { useEffect, useState } from "react";
import axios from "axios";

const cx = classNames.bind(styles);

function Radio({idProduct, type, active, setActive }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${idProduct}/${type}`)
            .then((response) => {
                setData(response.data);
                setActive(response.data[0]);
            })
            .catch(err => console.error(err));
    }, [])

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