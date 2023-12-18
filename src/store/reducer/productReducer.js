import { ADD_PRODUCT, ADD_TO_FAVOURITE, CHANGE_QUANTITY, CLEAR_CART, DELETE_PRODUCT, GET_RATING, REMOVE_TO_FAVOURITE, SET_CART, SET_COLORS, SET_PRODUCTS, SET_RATING, SET_SIZES } from "~/constant";

const productReducer = (state, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case ADD_PRODUCT: 
            return {
                ...state,
                products: [
                    action.payload,
                    ...state.products
                ]
            }
        case SET_RATING:
            return {
                ...state,
                rate: {
                    ...state.rate,
                    [action.idproduct]: [
                        action.data.rating,
                        action.data.quantity,
                    ],
                }
            }

        case SET_COLORS:
            return {
                ...state,
                colors: {
                    ...state.colors,
                    [action.idproduct]: action.data,
                }
            }

        case SET_SIZES:
            return {
                ...state,
                sizes: {
                    ...state.sizes,
                    [action.idproduct]: action.data,
                }
            }
        case ADD_TO_FAVOURITE:
            return {
                ...state,
                favourites: {
                    ...state.favourites,
                    [action.idproduct]: 1
                }
            }
        case REMOVE_TO_FAVOURITE:
            delete state.favourites[action.idproduct]
            return {
                ...state,
            }
        case SET_CART:
            return {
                ...state,
                cart: {
                    quantity: action.payload.quantity,
                    totalPrice: action.payload.totalPrice,
                }
            }
        case CHANGE_QUANTITY:
                return {
                    ...state,
                    cart: {
                        ...state.cart,
                        totalPrice: state.cart.totalPrice + action.payload,
                    }
                }
        case DELETE_PRODUCT: 
                return {
                    ...state,
                    products: state.products.filter(product => product.idproduct !== action.payload.idproduct)
                } 
        case CLEAR_CART: 
                return {
                    ...state,  
                    cart: {}
                }
        case GET_RATING:
            return action.payload
        default:
            throw new Error("Invalid action")
    }
}

export default productReducer;