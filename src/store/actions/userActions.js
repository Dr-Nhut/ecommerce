import { LOGIN, LOGOUT, ADD_ADDRESS } from "~/constant";

export const logout = () => ({
    type: LOGOUT,
})

export const login = payload => ({
    type: LOGIN,
    payload
})

export const addAddress = (address) => ({
    type: ADD_ADDRESS,
    address,
})

