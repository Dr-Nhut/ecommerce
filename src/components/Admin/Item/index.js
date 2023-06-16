import classNames from "classnames/bind";
import styles from "./Item.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function Item({ value }) {
    return (
        <div className={cx("wrapper")}>
            <img className={cx("thumbnail")} src={`http://localhost:5000/${value.thumbnail}`} alt="thumbnail" />

            <div className={cx("info")}>
                {value.name}
            </div>
            <div className={cx("footer")} >
                <Link className={cx("action")} to={`./${value.idcategory}/edit`}>
                    <FontAwesomeIcon icon={faEdit} />
                </Link>
                <Link className={cx("action")} to={`./delete`}>
                    <FontAwesomeIcon icon={faTrash} />
                </Link>
            </div>
        </div>
    );
}

export default Item;