import { useState, useLayoutEffect } from "react";
import {ProductContext} from "~/store/context";

function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);


    useLayoutEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setProducts(data)
            })
    }, []);
    if (Array.isArray(products) && products.length === 0) {
        return <h1>Loading...</h1>;
    }
    else return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;