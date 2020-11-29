import React from 'react'
import "./custom-button.component.scss";

const CustomButtonComponent = ({ children, googleSigninButton, inverted, ...otherpropety }) => {
    return (
        <button className={(inverted) ? "inverted" : "", (googleSigninButton) ? "googleSignin" : "",
            "custom-button"
        }  {...otherpropety}>
            {children}
        </button >
    )
}

export default CustomButtonComponent
