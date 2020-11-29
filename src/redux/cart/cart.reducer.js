import CartActionType from './cart.type'
import { addItemToCart, removeItemFromCart, removeItemQuantity, someOther } from '../cart/cart.utils'

const initial_state = {
    hidden: true,
    cartItems: [],
    quantity: 0,
    name: ""
}

const CartReducer = (state = initial_state, action) => {
    switch (action.type) {
        case CartActionType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionType.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionType.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                //cartItems: state.cartItems.filter((item) => (item.id != action.payload.id))
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case CartActionType.REDUCE_ITEM_QUATITY:
            return {
                ...state,
                cartItems: removeItemQuantity(state.cartItems, action.payload)
            }
        // case CartActionType.MAHNDRA_NAME:
        //     return {
        //         ...state,
        //         name: someOther(state.name)
        //     }    
        default:
            return state;
    }
}

export default CartReducer