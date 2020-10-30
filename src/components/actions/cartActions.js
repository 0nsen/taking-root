import {ADD_TO_CART, REMOVE_ITEM} from '../actions/actionTypes'

export const addToCart = (key, size, quantity, price) => {
    return {
        type: ADD_TO_CART,
        payload: {
            key,
            size,
            quantity,
            price
        }
    }
}

export const removeItem = (key, size) => {
    return {
        type: REMOVE_ITEM,
        payload: {
            key,
            size
        }
    }
}