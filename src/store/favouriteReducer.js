import { ADD_TO_FAVOURITE, REMOVE_TO_FAVOURITE } from "~/constant";

const favouriteReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITE:
            return {
                ...state,
                [action.payload]: 1
            }
        case REMOVE_TO_FAVOURITE:
            return {
                ...state,
                [action.payload]: 0
            }
        default:
            throw new Error("Invalid action")
    }
}

export default favouriteReducer;