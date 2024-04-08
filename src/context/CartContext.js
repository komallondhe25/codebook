import { createContext, useContext, useReducer } from "react"
import { cartReducer } from "../reducer"
const cartIntitalState = {
    cartList: [],
    total : 0
}

const CartContext = createContext(cartIntitalState);

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, cartIntitalState);

    function addToCart (product) {
        const updatedCartList = state.cartList.concat(product);
        const updatedTotal = state.total + product.price;
        dispatch({
            type : "ADD_TO_CART",
            payload : {
                products : updatedCartList,
                total: updatedTotal
            }
        })
    }
    function removeFromCart (product) {
        const updatedCartList = state.cartList.filter((item) => product.id !== item.id)
        const updatedTotal = state.total - product.price;
        dispatch({
            type : "REMOVE_FROM_CART",
            payload : {
                products : updatedCartList,
                total: updatedTotal
            }
        })
    }

    function clearCart () {
        dispatch({
            type: "CLEAR_CART",
            payload: {
                products : [],
                total : 0
            }
        })
    }
    
    const value = { 
        cartList : state.cartList,
        total : state.total,
        state,
        dispatch,
        addToCart,
        removeFromCart,
        clearCart
    }
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
} 