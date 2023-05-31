import classNames from "classnames/bind";
import styles from "./SidebarLayout.module.scss";
import Header from "~/components/Layout/Header";
import Footer from "~/components/Layout/Footer";
import Sidebar from "~/components/Layout/Sidebar";

const cx = classNames.bind(styles);

function SidebarLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            <Header />
            <div className={cx("container")}>
                <div className={cx("sidebar")}><Sidebar /></div>
                <div className={cx("content")}>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SidebarLayout;