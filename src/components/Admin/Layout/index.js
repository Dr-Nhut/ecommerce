import classNames from "classnames/bind";
import styles from "./Layout.module.scss";
import HeaderAdmin from "./Header";
import Dashboard from "./Dashboard";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function AdminLayout({ children }) {
    const [showDashboard, setShowDashboard] = useState(true);
    return (
        <div className={cx("wrapper")}>
            {showDashboard &&
                <div className={cx("dashboard")}>
                    <Dashboard onHide={setShowDashboard} />
                </div>
            }
            <div className={cx("container")}>
                <div className={cx("header")}>
                    {showDashboard || <FontAwesomeIcon className={cx("icon")} icon={faBars} onClick={() => setShowDashboard(true)} />}
                    <HeaderAdmin />
                </div>
                <div className={cx("content")}>{children}</div>
            </div>
        </div>
    );
}

export default AdminLayout;