import React from 'react'
import "./sign_signup.component.styles.scss";
import Signin from '../signin/signin.component';
import Signup from '../signup/signup.component';

const Signinsignup = () => {
    return (
        <div className="sign-in-and-sign-up">
            <Signin></Signin>
            <Signup></Signup>
        </div>
    )
}

export default Signinsignup
