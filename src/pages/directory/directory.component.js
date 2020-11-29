import React, { Component } from 'react'
import MenuItem from "../../components/menu-item/menu-item.component"
import sections_data from "./directory.data"
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectdirectorySelect } from '../../redux/directory/directory.selector'

// export class directoryComponent extends Component {
//     constructor() {
//         super();
//         this.state = {
//             sections: sections_data
//         }
//     }

//     render() {
//         return (
//             <div className="directory-menu">
//                 {
//                     this.state.sections.map(({ id, ...otherpropety }) => (
//                         <MenuItem key={id} {...otherpropety} ></MenuItem>
//                     ))
//                 }
//             </div>
//         )
//     }
// }
const directoryComponent = ({ sections }) => {
    return (
        <div className="directory-menu">
            {
                sections.map(({ id, ...otherpropety }) => (
                    <MenuItem key={id} {...otherpropety} ></MenuItem>
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectdirectorySelect
})

export default connect(mapStateToProps)(directoryComponent)
