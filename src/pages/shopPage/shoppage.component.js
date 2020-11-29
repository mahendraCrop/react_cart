import React, { Component } from 'react'
import shoppage_data from "./shop.data";
import PreviewCollection from "../../components/preview-collection/preview.collection";
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectShopDataDetails } from '../../redux/shop/shop.selector'
import CollectionOverViewComponent from '../../components/collectionOverview/collectionOverView.component'
import { Route } from 'react-router-dom'
import CollectionPagecomponent from '../../components/collection-page/collectionPage.component'

// export class showpageComponent extends Component {
//     constructor() {
//         super();
//         this.state = {
//             collection: shoppage_data
//         }
//     }
//     render() {
//         const { collection } = this.state;
//         return (
//             <div>
//                 {
//                     collection.map((item) => (
//                         <PreviewCollection key={item.id} {...item}></PreviewCollection>
//                     ))
//                 }
//             </div>
//         )
//     }
// }

const showpageComponent = ({ match }) => {
    console.log("matchhhaaa", match.path)
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverViewComponent} />
            <Route exact path={`${match.path}/:shopid`} component={CollectionPagecomponent} />
            {/* <CollectionOverViewComponent /> */}
            {/* {
                collection.map((item) => (
                    <PreviewCollection key={item.id} {...item}></PreviewCollection>
                ))
            } */}
        </div>
    )
}

// const mapStateToProps = createStructuredSelector({
//     collection: selectShopDataDetails
// })

// export default connect(mapStateToProps)(showpageComponent)
export default showpageComponent