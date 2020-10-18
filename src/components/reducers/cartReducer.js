import {aeonium, sedum, cactus, unusual} from '../Product-data/product-data'
import {ADD_TO_CART} from '../actions/actionTypes'

const initState = {
    all_plants: aeonium.concat(sedum, cactus, unusual),
    aeonium: aeonium,
    sedum: sedum,
    cactus: cactus,
    unusual: unusual,
    addedItems: [],
    total: 0,
    selected_index: []
};

const cartReducer = (state = initState, action) => {
    if (action.type === ADD_TO_CART) {
        let added_item = state.all_plants.find(item => item.key === action.key);
        let existed_item = state.addedItems.find(item => item.key === action.key);
        if (existed_item) {
            added_item.quantity += 1;
            let newTotal = Number((state.total + existed_item.prices[action.price_index]).toFixed(2));
            return {    
                ...state,
                total: newTotal,
                selected_index: [...state.selected_index, action.price_index]
            }
        }
        else {
            added_item.quantity = 1;
            let newTotal = Number((state.total + added_item.prices[action.price_index]).toFixed(2));
            return {
                ...state,
                addedItems: [...state.addedItems, added_item],
                total: newTotal,
                selected_index: [...state.selected_index, action.price_index]
            }
        }
    }
    else return state;
}

export default cartReducer;