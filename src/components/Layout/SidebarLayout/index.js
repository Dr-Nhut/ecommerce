import classNames from "classnames/bind";
import styles from "./SidebarLayout.module.scss";
import Header from "~/components/Layout/Header";
import Footer from "~/components/Layout/Footer";
import Sidebar from "~/components/Layout/Sidebar";
import FilterProvider from "~/store/provider/FilterProvider";

const cx = classNames.bind(styles);

function SidebarLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            <Header />
            <div className={cx("container")}>
                <FilterProvider>
                    <div className={cx("sidebar")}>
                        <Sidebar />
                    </div>
                    <div className={cx("content")}>
                        {children}
                    </div>
                </FilterProvider>
            </div>
            <Footer />
        </div>
    );
}

export default SidebarLayout;