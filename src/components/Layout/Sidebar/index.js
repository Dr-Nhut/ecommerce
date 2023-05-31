import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import Filter from "~/components/Filter";
import { createContext, useState } from "react";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

const prices = [{
    type: "price-1",
    value: "Dưới 100.000"
}, {
    type: "price-2",
    value: "100.000 - 500.000"
}, {
    type: "price-3",
    value: "500.000 - 2.000.000"
}, {
    type: "price-1",
    value: "2.000.000 - 5.000.000"
}, {
    type: "price-1",
    value: "Trên 5.000.000"
}];

const sizes = [{ type: "S", value: "Size S" }, { type: "M", value: "Size M" }, { type: "L", value: "Size L" }];

const categories = [
    { type: "men's clothing", value: "Thời trang nam" },
    { type: "jewelery", value: "Trang sức" },
    { type: "electronics", value: "Điện tử" },
    { type: "women's clothing", value: "Thời trang nữ" },
]

export const FilterContext = createContext();

function Sidebar() {
    const [filters, setFilters] = useState([]);
    return (
        <div className={cx("wrapper")}>
            <div className={cx("header")}>Bộ lọc</div>

            <div className={cx("applied-filters")}>
                {filters.map((item, index) => <Button primary key={index}>{item}</Button>)}
            </div>

            <FilterContext.Provider value={[prices, filters, setFilters]}>
                <Filter title="Mức giá" open />
            </FilterContext.Provider>

            <FilterContext.Provider value={[sizes, filters, setFilters]}>
                <Filter title="Kích thước" open />
            </FilterContext.Provider>

            <FilterContext.Provider value={[categories, filters, setFilters]}>
                <Filter title="Loại" open />
            </FilterContext.Provider>
        </div>
    );
}

export default Sidebar;