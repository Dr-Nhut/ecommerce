import axios from "axios";
import { useContext, useLayoutEffect, useReducer } from "react";
import { ProductContext, UserContext } from "~/store/context";
import productReducer from "../reducer/productReducer";
import { productActions as actions } from "../actions";
import { INIT_PRODUCT } from "~/constant";

function ProductProvider({ children }) {
    const [user] = useContext(UserContext);
    const [state, dispatch] = useReducer(productReducer, INIT_PRODUCT);
    useLayoutEffect(() => {
        axios.get('http://localhost:5000/api/products/getAll')
            .then((response) => {
                dispatch(actions.setProducts(response.data));
            })
            .catch((err) => console.error(err));

        user ? 
        axios.get(`http://localhost:5000/api/cart/${user.cart}`)
            .then((response) => {
                dispatch(actions.setCart(response.data));
            })
            .catch((err) => console.error(err))
        : dispatch(actions.setCart({quantity: 0, totalPrice: 0}));
}, [user, user.cart]);

if (!Array.isArray(state.products)) {
    return <h1>Loading...</h1>;
}
else return (
    <ProductContext.Provider value={[state, dispatch]}>
        {children}
    </ProductContext.Provider>
)
}

export default ProductProvider;