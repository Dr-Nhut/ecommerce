import axios from "axios";
import { useLayoutEffect, useReducer, useState } from "react";
import { UserContext } from "~/store/context";
import userReducer from "../reducer/userReducer";
import { userActions } from "../actions";

function UserProvider({ children }) {
    const [state, dispatch] = useReducer(userReducer, false);
    const [loading, setLoading] = useState(false);

    useLayoutEffect(() => {
        axios.defaults.withCredentials = true;
        axios.get('http://localhost:5000/api/auth')
            .then((response) => {
                dispatch(userActions.login(response.data));
                setLoading(true);
            })
            .catch(err => console.error(err));
    }, [])

    if (loading) {
        return (
            <UserContext.Provider value={[state, dispatch]}>
                {children}
            </UserContext.Provider>
        )
    }

}
export default UserProvider;