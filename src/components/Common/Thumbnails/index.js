import classNames from "classnames/bind";
import styles from "./Thumbnails.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

function Thumbnails({ data, noneOptions }) {
    const thumbnails = data.split(',');
    const [thumbnail, setThumbnail] = useState(thumbnails[0]);

    const handleOnClick = (e) => {
        setThumbnail(e.target.alt);
    }

    return (
        <div className={cx("wrapper")}>
            <img className={cx('thumbnail')} src={`http://localhost:5000/${thumbnail}`} alt="Thumbnail"></img>
            {noneOptions || <div className={cx('thumbnail-options')}>
                {thumbnails.map((item, index) => {
                    let classes = ['thumbnail-item'];
                    if(item === thumbnail) {
                        classes.push('thumbnail-active');
                    }
                    return <img onClick={handleOnClick} className={cx(classes)} key={index} src={`http://localhost:5000/${item}`} alt={item}></img>
                })
                } 
            </div>}
        </div>
    );
}

export default Thumbnails;