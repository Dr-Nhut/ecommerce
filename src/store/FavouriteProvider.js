import { useReducer, useContext } from "react";
import { ProductContext, FavouriteContext } from "~/store";
import favouriteReducer from "./favouriteReducer";
function FavouriteProvider({ children }) {
    const products = useContext(ProductContext);
    const favouriteItems = {};
    (() => {
        products.forEach(product => favouriteItems[product.id] = 0);
    })();
    const [state, dispatch] = useReducer(favouriteReducer, favouriteItems);
    return (
        <FavouriteContext.Provider value={[state, dispatch]}>
            {children}
        </FavouriteContext.Provider>)
}

export default FavouriteProvider;