import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const collectionPagecomponent = ({ match }) => {
    console.log("match", match)
    return (
        <div className="category">
            collectionPagecomponent
        </div>
    )
}

// collectionPagecomponent.propTypes = {
//     prop: PropTypes
// }

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(collectionPagecomponent)
export default collectionPagecomponent
