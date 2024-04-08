
export const cartReducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case "CLEAR_CART" :
            return {...state, cartList : payload.products, total : payload.total}

        case "ADD_TO_CART" :
            return {...state, cartList : payload.products, total: payload.total}

        case "REMOVE_FROM_CART" :
            return {...state, cartList : payload.products, total: payload.total}
        
        default:
            throw new Error("No case found");
    }
}