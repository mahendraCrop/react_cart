import React from 'react';
import Custombutton from '../custom-button/custom-button.component'
import "./cart-dropdown.style.scss";
import { connect } from 'react-redux';
import CartItemComponent from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector"
import { toggleCart } from '../../redux/cart/cart.action'
import { withRouter } from 'react-router-dom'

const CartDropDown = ({ cartItems, history, dispatch }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    //console.log(cartItems);
                    (cartItems.length > 0) ?
                        cartItems.map((cartItem) => <CartItemComponent key={cartItem.id} item={cartItem} />)
                        :
                        <span className="empty-message">Your Cart is Empty</span>
                }
                <Custombutton name="" label="checkout" onClick={() => {
                    history.push('/checkout'); dispatch(toggleCart())
                }}>Go To checkout </Custombutton>
            </div>
        </div>)
};

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//     cartItems
// })
const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})
// const mapDispatchToProps = (dispatch) => ({
//     toggleCart: () => dispatch(toggleCart())
// })

export default withRouter(connect(mapStateToProps)(CartDropDown));