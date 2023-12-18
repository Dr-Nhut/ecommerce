import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "~/store";

function RequireAdmin({children}) {
    const [user] = useContext(UserContext);

    return user.role === true ? (
        children
    ) : (
        <Navigate to="/login" replace/>
    );
}

export default RequireAdmin;