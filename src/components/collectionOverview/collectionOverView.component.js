import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectShopDataDetails } from '../../redux/shop/shop.selector'
import './collectionOverView.style.scss'
import PreviewCollection from '../preview-collection/preview.collection'

const CollectionOverViewComponent = ({ collection }) => {
    return (
        <div>
            {
                collection.map((item) => (
                    <PreviewCollection key={item.id} {...item}></PreviewCollection>
                ))
            }
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    collection: selectShopDataDetails
})
export default connect(mapStateToProps)(CollectionOverViewComponent)
