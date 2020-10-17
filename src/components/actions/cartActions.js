import {ADD_TO_CART} from '../actions/actionTypes'

export const addToCart = (key, price) => {
    return {
        type: ADD_TO_CART,
        key,
        price
    }
}