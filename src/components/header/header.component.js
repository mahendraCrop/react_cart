import React from 'react'
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import "./header.styles.scss";
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.compoent';
import { cartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from 'reselect';

function headerComponent({ currentUser, someOther, hidden, cartItems }) {
    console.log('props', currentUser, 'cartItems', cartItems);
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to="/" className="option">
                    Shop
                </Link>
                <Link to="/signinsignup" className="option">
                    contact
                </Link>
                {
                    (currentUser) ? (
                        <div className="option" onClick={() => { auth.signOut() }}>
                            Sign Out
                        </div>
                    ) : (<Link to="/signin" className="option">
                        Sign In
                    </Link>)

                }
                {someOther}
                <CartIcon />
            </div>
            {
                hidden ? "" : <CartDropDown />
            }
        </div>
    )
}

// const mapStateToProp = (state) => ({
//     currentUser: state.user.currentUser
// })

// const mapStateToProp = ({ user: { currentUser }, cart: { hidden } }) => ({
//     currentUser,
//     hidden
// })

const mapStateToProp = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: cartHidden,
})


export default connect(mapStateToProp, "")(headerComponent)
