import { createContext, useEffect, useState } from "react";
import "./GlobalStyles.scss";

export const ProductContext = createContext();

function GlobalStyles({ children }) {
    return children
}

export default GlobalStyles;