import React from 'react'
import "./homepage.styles.scss"
import DirectoryComponent from "../directory/directory.component";

const homeComponent = (props) => {
    return (
        <div className="homepage">
            <div className="directory-menu">
                <DirectoryComponent />
            </div>
        </div>
    )
}

export default homeComponent

