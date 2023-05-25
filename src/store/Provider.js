import { useReducer } from "react";
import CartContext from "./Context";
import reducer, { INIT_STATE } from "./reducer";

function Provider({ children }) {

    const [start, dispatch] = useReducer(reducer, INIT_STATE);
    return (
        <CartContext.Provider value={[start, dispatch]}>
            {children}
        </CartContext.Provider>
    )
}

export default Provider;