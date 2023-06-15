import classNames from "classnames/bind";
import styles from "./Dashboard.module.scss";
import { Menu } from "~/components/Popper";
import { DASHBOARD_ITEMS } from "~/constant";
import Logo from "~/components/Common/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOutdent } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Dashboard({ onHide }) {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("header")}>
                <div className={cx("logo")}>
                    <Logo title="Admin" />
                </div>
                <div onClick={() => onHide(false)} className={cx("outdent")}><FontAwesomeIcon icon={faOutdent} /></div>
            </div>
            <div className={cx("content")}>
                <Menu data={DASHBOARD_ITEMS} size="large"></Menu>
            </div>
        </div>
    );
}

export default Dashboard;