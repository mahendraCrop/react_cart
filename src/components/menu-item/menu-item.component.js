import React from 'react'
import  "./menu-item.scss";
import { withRouter,Link } from "react-router-dom";

const MenuItemComponent = ({title,imageUrl,size,linkUrl,history,match}) => {
    return (
        <div className={`${size} menu-item`} onClick={()=>{history.push(`${match.url}${linkUrl}`)}}>
            <div  className="background-image"  style={{backgroundImage:`url(${imageUrl})`}}/>
            <div className="content">
                <div className="title" >
                    
                    {title.toUpperCase()}
                    
                    <div className="subtitle">
                        Shop Now
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(MenuItemComponent);