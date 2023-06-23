import axios from "axios";
import { useLayoutEffect, useReducer } from "react";
import { UserContext } from "~/store/context";
import userReducer from "../reducer/userReducer";
import { userActions } from "../actions";

function UserProvider({ children }) {
    const [state, dispatch] = useReducer(userReducer, false);

    useLayoutEffect(() => {
        axios.defaults.withCredentials = true;
        axios.get('http://localhost:5000/api/auth')
            .then((response) => {
                dispatch(userActions.login(response.data));
            })
            .catch(err => console.error(err));
    }, [])

    return (
        <UserContext.Provider value={[state, dispatch]}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider;