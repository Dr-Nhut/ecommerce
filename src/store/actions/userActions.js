import { LOGIN, LOGOUT } from "~/constant";

export const logout = () => ({
    type: LOGOUT,
})

export const login = payload => ({
    type: LOGIN,
    payload
})


