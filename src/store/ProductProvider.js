import { useState, useEffect } from "react";
import { ProductContext } from "./Context";

function Provider({ children }) {
    const [product, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json);
            })
    }, [])
    return (
        <ProductContext.Provider value={product}>
            {children}
        </ProductContext.Provider>)
}

export default Provider;