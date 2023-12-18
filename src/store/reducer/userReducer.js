import { ADD_ADDRESS, LOGIN, LOGOUT } from "~/constant";

const userReducer = (state, action) => {
    switch (action.type) {
        case LOGOUT:
            return false;
        case LOGIN:
            return action.payload
        case ADD_ADDRESS:
            return {
                ...state,
                address: action.address
            }
        default:
            throw new Error("Invalid action")
    }
}

export default userReducer;