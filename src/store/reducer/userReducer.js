import { LOGIN, LOGOUT } from "~/constant";

const userReducer = (state, action) => {
    switch (action.type) {
        case LOGOUT:
            return false;
        case LOGIN:
            return action.payload
        default:
            throw new Error("Invalid action")
    }
}

export default userReducer;