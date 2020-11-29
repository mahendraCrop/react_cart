import React from "react";
import { ReactComponent as ShoppingBagIcon } from "../../assets/images/shopping-bag.svg";
import "./cart-icon.style.scss";
import { connect } from 'react-redux'
import { toggleCart } from '../../redux/cart/cart.action'
import { selectCartCount } from '../../redux/cart/cart.selector'

const CartIcon = ({ toggleCart, itemsCount }) => (
    <div className="cart-icon" onClick={toggleCart}>
        <ShoppingBagIcon className="shopping-icon" />
        <span className="item-count">{itemsCount}</span>
    </div>
)
const mapDispatchToProps = (dispatch) => ({
    toggleCart: () => { dispatch(toggleCart()) }
})
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//     itemsCount: cartItems.reduce((accumilatedQuaultity, item) => (accumilatedQuaultity + item.quantity), 0)
// })
const mapStateToProps = (state) => ({
    itemsCount: selectCartCount(state)
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)