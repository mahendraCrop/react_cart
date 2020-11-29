export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingItem = cartItems.find(
        (item) => (item.id === cartItemToAdd.id)
    );

    if (existingItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemQuantity = (cartItems, cartItemQuantityToRemove) => {
    console.log("removeItemQuantity util", cartItems, cartItemQuantityToRemove)
    const existingItem = cartItems.find(
        (item) => (item.id === cartItemQuantityToRemove.id)
    );

    if (existingItem.quantity == 1) {
        return cartItems.filter((item) => (item.id != cartItemQuantityToRemove.id))

    } else {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemQuantityToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
    }

}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    console.log("cartItemToRemove", cartItemToRemove, "cartItem", cartItems);
    return cartItems.filter((item) => (item.id != cartItemToRemove.id))
}

export const someOther = (cartItems) => {
    return [...cartItems, "mahendra"];
}