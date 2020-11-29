import React from 'react'
import { connect } from 'react-redux'
import './checkOutItem.style.scss'
import { removeFromCart, addToCart, removeItemQuantity } from '../../redux/cart/cart.action'
const CheckOutItemComponent = ({ cartItem, removeItemFromCart, addToCart, removeItemQuantity }) => {
    const { imageUrl, name, quantity, price } = cartItem
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl}></img>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => { removeItemQuantity(cartItem) }}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => { addToCart(cartItem) }}>
                    &#10095;
                </div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => (removeItemFromCart(cartItem))}>&#10005;</div>
        </div >
    )
}
const mapDispatchToProps = dispatch => ({
    removeItemFromCart: (item) => dispatch(removeFromCart(item)),
    addToCart: (item) => dispatch(addToCart(item)),
    removeItemQuantity: (item) => dispatch(removeItemQuantity(item)),
})
export default connect(null, mapDispatchToProps)(CheckOutItemComponent)
