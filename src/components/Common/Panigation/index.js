import classNames from "classnames/bind";
import styles from "./Panigation.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";

const cx = classNames.bind(styles);
function Panigation({ type, page, setPage }) {
    const [number, setNumber] = useState();
    useEffect(() => {
        axios.get(`http://localhost:5000/api/${type}/quantity`)
            .then(response => {
                const numberOfPages = Math.floor(response.data.quantity / 10) + 1;
                let pageList = [];
                for (let i = 1; i <= numberOfPages; i++) {
                    pageList.push(i);
                }
                setNumber(pageList)
            })
            .catch(err => console.error(err));
    }, [type])
    return (
        <div className={cx('wrapper')}>
            <div onClick={() => setPage((pre) => +pre === 1 ? 1 : +pre - 1)} className={cx('page')}><FontAwesomeIcon icon={faBackward} /></div>
            {number && number.map(item => {
                const classNames = ['page']
                if (item === page) {
                    classNames.push('active');
                }
                return <div className={cx(...classNames)} onClick={() => setPage(item)} key={item}>{item}</div>
            })}
            <div onClick={() => setPage((pre) => +pre === number.length ? pre : +pre + 1)} className={cx('page')}><FontAwesomeIcon icon={faForward} /></div>
        </div>
    );
}

export default Panigation;