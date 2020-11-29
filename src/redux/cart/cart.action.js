import CartActionType from './cart.type'
import { addItemToCart } from '../cart/cart.utils'
export const toggleCart = () => {
    return {
        type: CartActionType.TOGGLE_CART_HIDDEN,
        //payload: cart
    }
}
export const addToCart = (item) => {
    return { type: CartActionType.ADD_ITEM_TO_CART, payload: item }
}
export const removeFromCart = (item) => {
    return { type: CartActionType.REMOVE_ITEM_FROM_CART, payload: item }
}
export const incrementItem = (item) => {
    return { type: CartActionType.INCREMENT_ITEM, payload: item }
}
export const removeItemQuantity = (item) => {
    return { type: CartActionType.REDUCE_ITEM_QUATITY, payload: item }
}

export const getMahendra = (item) => {
    return {
        type: CartActionType.MAHNDRA_NAME,
        payload: item
    }
}

