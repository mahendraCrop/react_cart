import React from 'react'
import "./collection.item.styles.scss"
import CustomButton from '../custom-button/custom-button.component'
import { connect } from 'react-redux'
import { addToCart } from '../../redux/cart/cart.action'
// AddToCart

const Collectionitem = ({ item, addToCart }) => {
    const { id, name, imageUrl, price } = item
    return (
        <div className="collection-item">
            <div className="image" style={{
                backgroundImage: `url(${imageUrl})`
            }}>
            </div>
            <div className="collection-footer">
                <span className="name"> {name}</span>
                <span className="price"> ${price}</span>
            </div>
            <CustomButton inverted onClick={() => { addToCart(item) }} >Add To Cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: item => {
        dispatch(addToCart(item))
    }
})
export default connect(null, mapDispatchToProps)(Collectionitem)
