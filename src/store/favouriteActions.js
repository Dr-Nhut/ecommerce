import { ADD_TO_FAVOURITE, REMOVE_TO_FAVOURITE } from "~/constant";

export const addToFavourite = payload => ({
    type: ADD_TO_FAVOURITE,
    payload
})

export const removeToFavourite = payload => ({
    type: REMOVE_TO_FAVOURITE,
    payload
})

