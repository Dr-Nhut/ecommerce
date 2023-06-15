import classNames from "classnames/bind";
import styles from "./Tabs.module.scss";
import NavBar from "../../Navbar";
import { useState } from "react";

const cx = classNames.bind(styles);

function Tabs({ navs, outlet }) {
    const [tab, setTab] = useState(0);

    return (
        <div className={cx("wrapper")}>
            <div className={cx("nav")}>
                <NavBar active={tab} activeTab={setTab} data={navs} />
            </div>

            <div className={cx("outlet")}>
                {outlet[tab]}
            </div>
        </div>
    );
}

export default Tabs;