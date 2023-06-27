import { SET_PRODUCTS, SET_RATING, SET_COLORS, SET_SIZES, GET_RATING, ADD_TO_FAVOURITE, REMOVE_TO_FAVOURITE, ADD_TO_CART, SET_CART, CHANGE_QUANTITY } from "~/constant";

export const setProducts = payload => ({
    type: SET_PRODUCTS,
    payload
})

export const setRating = (idproduct, data) => ({
    type: SET_RATING,
    idproduct,
    data
})

export const setColors = (idproduct, data) => ({
    type: SET_COLORS,
    idproduct,
    data
})

export const setSizes = (idproduct, data) => ({
    type: SET_SIZES,
    idproduct,
    data
})

export const addToFavourite = idproduct => ({
    type: ADD_TO_FAVOURITE,
    idproduct
})

export const removeToFavourite = idproduct => ({
    type: REMOVE_TO_FAVOURITE,
    idproduct
})

export const setCart = payload => ({
    type: SET_CART,
    payload
})

export const changeQuantityItem = payload => ({
    type: CHANGE_QUANTITY,
    payload
})

export const addToCart = payload => ({
    type: ADD_TO_CART,
    payload
});
//

export const getRating = payload => ({
    type: GET_RATING,
    payload
})
