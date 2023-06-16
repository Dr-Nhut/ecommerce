import classNames from "classnames/bind";
import styles from "./ListItem.module.scss";
import Item from "~/components/Admin/Item";
import { useEffect, useState } from "react";
import axios from "axios";

const cx = classNames.bind(styles);
function ListItem({ value }) {
    const [reRender, setReRender] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/${value}`)
            .then(function (response) {
                if (response.data) {
                    setData(response.data);
                }
            })
    }, [reRender, value])
    return (
        <div className={cx("wrapper")}>
            {data.map((item, index) => <Item key={index} value={item} onDelete={setReRender}/>)}
        </div>
    );
}

export default ListItem;