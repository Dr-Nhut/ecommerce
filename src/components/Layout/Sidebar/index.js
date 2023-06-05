import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import Filter from "~/components/Filter";
import Button from "~/components/Button";
import { FilterContext } from "~/store/context";
import { useContext } from "react";
import { categories, prices, sizes } from "~/constant";
const cx = classNames.bind(styles);


function Sidebar() {
    const [filters] = useContext(FilterContext);
    return (
        <div className={cx("wrapper")}>
            <div className={cx("header")}>Bộ lọc</div>

            <div className={cx("applied-filters")}>
                {filters.map((item, index) => <Button primary key={index}>{item.value}</Button>)}
            </div>

            <Filter checkbox title="Mức giá" data={prices} open/>

            <Filter checkbox title="Kích thước" data={sizes} />
            <Filter checkbox title="Loại" data={categories}/>
        </div>
    );
}

export default Sidebar;