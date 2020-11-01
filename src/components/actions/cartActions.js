import {ADD_QUANTITY, ADD_TO_CART, REMOVE_ITEM, SUBTRACT_QUANTITY} from '../actions/actionTypes'

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

export const addQuantity = (key, size) => {
    return {
        type: ADD_QUANTITY,
        payload: {
            key,
            size
        }
    }
}

export const subtractQuantity = (key, size) => {
    return {
        type: SUBTRACT_QUANTITY,
        payload: {
            key,
            size
        }
    }
}