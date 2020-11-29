import React from 'react'
import { connect } from 'react-redux'
import "./checkOut.style.scss"
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector'
import CheckOutItemComponent from '../../components/checkOutItem/checkOutItem.component'

const checkOut = ({ cartItems, total, ...props }) => {
    console.log("checkout item", cartItems, "cartTotal", total, "prop", props)
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span className="">
                        Product
                    </span>
                </div>
                <div className="header-block">
                    <span className="">
                        Desciption
                    </span>
                </div>
                <div className="header-block">
                    <span className="">
                        Quantity
                    </span>
                </div>
                <div className="header-block">
                    <span className="">
                        Prize
                    </span>
                </div>
                <div className="header-block">
                    <span className="">
                        Remove
                    </span>
                </div>

            </div>
            {
                cartItems.map((item, index) => (
                    <CheckOutItemComponent cartItem={item} key={item.id} />
                ))
            }
            <div className="total">
                <samp>
                    Total: {total}
                </samp>
            </div>
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})
const mapDispatchToProps = () => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(checkOut)
// connect
