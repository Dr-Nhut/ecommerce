import classNames from "classnames/bind";
import styles from "./SidebarLayout.module.scss";
import Header from "~/components/Layout/Header";
import Footer from "~/components/Layout/Footer";
import FilterProvider from "~/store/provider/FilterProvider";
import FilterSidebar from "~/components/Layout/FilterSidebar";
import MenuSidebar from "~/components/Layout/MenuSidebar";

const cx = classNames.bind(styles);

function SidebarLayout({ children, type }) {
    let Sidebar;
    switch (type) {
        case 0: 
            Sidebar = FilterSidebar;
            break;
        default: 
            Sidebar = MenuSidebar;
    }
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