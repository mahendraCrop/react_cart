import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)
export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumilatedQuaultity, item) => (accumilatedQuaultity + item.quantity), 0)
)
export const cartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)
export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumilatedQuaultity, item) => (accumilatedQuaultity + item.quantity * item.price), 0)
)