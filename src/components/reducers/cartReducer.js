import {aeonium, sedum, cactus, unusual} from '../Product-data/product-data'
import {ADD_TO_CART, REMOVE_ITEM, ADD_QUANTITY, SUBTRACT_QUANTITY} from '../actions/actionTypes'

const initState = {
    all_plants: aeonium.concat(sedum, cactus, unusual),
    aeonium: aeonium,
    sedum: sedum,
    cactus: cactus,
    unusual: unusual,
    addedItems: [],
    total: 0,
};

const cartReducer = (state = initState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            let added_item = state.all_plants.find(item => item.key === action.payload.key);

            added_item = {
                ...added_item,
                size: action.payload.size,
                quantity: action.payload.quantity,
                price: action.payload.price
            };

            console.log("added item: " + added_item.key + " " + added_item.size + " " + added_item.quantity + " " + added_item.price);
            
            let existed_item = state.addedItems.find(item => item.key === action.payload.key && item.size === action.payload.size);
            
            if (existed_item) {
                existed_item.quantity += Number(action.payload.quantity);
                let newTotal = Number((state.total + existed_item.price * action.payload.quantity).toFixed(2));
                return {    
                    ...state,
                    total: newTotal,
                }
            }
            else {
                let newTotal = Number((state.total + added_item.price * action.payload.quantity).toFixed(2));
                return {
                    ...state,
                    addedItems: [...state.addedItems, added_item],
                    total: newTotal,
                }
            }
            break;
        
        case REMOVE_ITEM:

            break;
        
        case ADD_QUANTITY:

            break;

        case SUBTRACT_QUANTITY:

            break;
    }

    return state;
}

export default cartReducer;