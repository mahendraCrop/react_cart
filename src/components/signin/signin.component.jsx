import React, { Component } from 'react'
import FormInput from "../form-input/form-input";
import CustomButtonComponent from "../custom-button/custom-button.component";
import { googleSignin, firestore } from '../../firebase/firebase.utils'
import "./signin.component.scss";
import { auth, signInWithEmailAndPassword } from "../../firebase/firebase.utils";

class SigninComponent extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        console.log("email", email, "password", password)
        try {
            const { signedUser } = auth.signInWithEmailAndPassword(email, password);
            console.log("signedUser", signedUser)
            this.setState({ email: "", password: "" })
        } catch (error) {
            console.log("error ", error)
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });


    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have a account</h2>
                <span>
                    sign in with email and password
                </span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" required name="email" id="email" value={this.state.email}
                        handleChange={this.handleChange} label="Email" />
                    <FormInput type="password" required name="password" id="password" value={this.state.password}
                        handleChange={this.handleChange} label="Password" />
                    <div className="buttons">
                        <CustomButtonComponent type="submit" value="submit form">Submit In</CustomButtonComponent>
                        <CustomButtonComponent onClick={googleSignin} googleSigninButton value="submit form">SignIn With Google</CustomButtonComponent>
                    </div>
                </form>
            </div>
        )
    }
}

export default SigninComponent
