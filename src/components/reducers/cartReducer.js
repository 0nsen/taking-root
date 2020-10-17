import {aeonium, sedum, cactus, unusual} from '../Product-data/product-data'
import {ADD_TO_CART} from '../actions/actionTypes'

const initState = {
    all_plants: aeonium.concat(sedum, cactus, unusual),
    aeonium: aeonium,
    sedum: sedum,
    cactus: cactus,
    unusual: unusual,
    addedItems: [],
    total: 0
};

const cartReducer = (state = initState, action) => {
    if (action.type === ADD_TO_CART) {
        let addedItem = state.all_plants.find(item => item.key === action.key);
        let existed_item = state.addedItems.find(item => item.key === action.key);
        if (existed_item) {
            return {
                ...state,
                total: state.total + action.price
            }
        }
        else {
            addedItem.quantity = 1;
            let newTotal = state.total + action.price;
            console.log("added");
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }
        }
    }
    else return state;
}

export default cartReducer;