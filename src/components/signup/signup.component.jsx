import React, { Component } from 'react'
import FormInput from "../form-input/form-input";
import CustomButton from '../custom-button/custom-button.component'
import "./signup.component.scss";
import { auth, createUserProfile } from "../../firebase/firebase.utils";

class Signupcomponent extends Component {
    constructor() {
        super();
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""

        }
    }
    componentDidMount() {

    }
    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert(`password and confirm passwords are not matching`);
            return;
        } else {

        }
        console.log("state ", displayName, email, password)
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            // .then((data) => {
            //console.log("create user data", data)
            await createUserProfile(user, { displayName })
            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
            // }).catch((error) => {
            //     console.log("error while creating user", error)
            // })
            console.log("user", user)

        } catch (error) {
            console.log("catch error", error)
        }
        //console.log("state", this.state)
    }
    handleChange = (e) => {
        const { name, value } = e.target
        // console.log("state change", name, value)
        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className="sign-up">
                <h2 className="title"> I do not a account</h2>
                <span className="">Sign up with email and Password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">

                    <FormInput
                        type="text"
                        label="display Name"
                        required
                        name="displayName"
                        id="displayname"
                        value={displayName}
                        handleChange={this.handleChange} />
                    <FormInput
                        label="Email"
                        required
                        type="email"
                        name="email"
                        id="personEmail"
                        value={email}
                        handleChange={this.handleChange} />
                    <FormInput
                        label="Password"
                        type="password"
                        value={password}
                        handleChange={this.handleChange}
                        name="password" />
                    <FormInput
                        label="confirm Password"
                        type="password"
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        name="confirmPassword" />

                    <CustomButton
                        type="submit"
                        label="Create User">sign-up
                        </CustomButton>
                </form>
            </div>
        )
    }
}

export default Signupcomponent
