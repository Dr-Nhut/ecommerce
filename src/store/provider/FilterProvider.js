import { useState } from "react";
import { FilterContext } from "~/store/context";

function FilterProvider({ children }) {
    const [filters, setFilters] = useState([]);
    return (
        <FilterContext.Provider value={[filters, setFilters]}>
            {children}
        </FilterContext.Provider>)
}

export default FilterProvider;