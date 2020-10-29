import {ADD_TO_CART} from '../actions/actionTypes'

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