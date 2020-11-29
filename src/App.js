import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, link, Switch, Redirect } from "react-router-dom";
import Headercomponent from "./components/header/header.component"
import ShowpageComponent from "./pages/shopPage/shoppage.component";
import HomeComponent from "./pages/homepage/homepage.component"
import SigninSignup from "./components/signin_signup/sign_signup.component"
import checkOut from './pages/checkOut/checkOut.component.js'

import { auth, createUserProfile } from './firebase/firebase.utils'
import { connect } from 'react-redux';
import setCurrentUser from "./redux/user/user.actions";
import { selectCurrentUser } from './redux/cart/cart.selector'
import { createStructuredSelector } from 'reselect';


class App extends Component {
  constructor(props) {
    super();
    // this.state = {
    //   currentUser: null
    // }

  }
  unsubscriber = null;
  componentDidMount() {
    const { setCurrentUser } = this.props
    try {
      this.unsubscriber = auth.onAuthStateChanged(async (userAuth) => {
        if (userAuth) {
          const userRef = createUserProfile(userAuth);
          (await userRef).onSnapshot((usersnapShot) => {
            // this.setState({
            //   currentUser: { id: usersnapShot.id, ...usersnapShot.data() }
            // }, () => {
            //   console.log("current user state", this.state.currentUser)
            // })
            setCurrentUser({
              currentUser: { id: usersnapShot.id, ...usersnapShot.data() }
            })
          })
        } else {
          this.setState({ currentUser: userAuth })
        }
      })
    } catch (error) {
      console.log('catch error signout', error);
    }


    console.log('state ', this.state);

  }

  componentWillUnmount() {
    this.unsubscriber();
  }

  render() {
    console.log('currentUser', this.props);
    return (
      <div className="App">
        <Headercomponent></Headercomponent>
        <Route exact={true} path="/" component={HomeComponent} />
        <Route path="/shop" component={ShowpageComponent} />
        {/* <Route path="/signin"  component={ShowpageComponent} /> */}
        {/* <Route path="/signup" component={ShowpageComponent} /> */}
        <Route exact path="/signin" render={() => (this.props.currentUser ? (<Redirect to='/' />) : <SigninSignup />)
        } />
        <Route exact path="/checkout" component={checkOut} />
      </div>
    );
  }
}
// const mapStateToProp = ({ user }) => {
//   return {
//     currentUser: user.currentUser
//   }
// }
const mapStateToProp = createStructuredSelector({
  currentUser: setCurrentUser
})
//setCurrentUser
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}
export default connect(mapStateToProp, mapDispatchToProps)(App);
