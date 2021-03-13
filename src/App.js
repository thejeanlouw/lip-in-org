import './App.css';
import { Component } from 'react';
import {Route, Link, Switch, HashRouter, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import HomePage from './pages/homepage/homepage.component';
import DonationPage from './pages/donation/donation.component'

import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth } from './firebase/firebase.utils'
import { createUserProfileDocument } from './firebase/firebase.functions'
import { setCurrentUser } from './redux/user/user-actions'

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        console.log("userAuth: ", userAuth)
        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser( 
            {
              id: snapShot.id,
              ...snapShot.data()
            }
          );
        })
      }
      this.props.setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <HashRouter basename='/'>
        <div className="App">
          <Header />
          <Switch>
            <Route path='/donate' component={DonationPage} />
            <Route path='/signin' render={() => (this.props.currentUser == null ? <SignInAndSignUpPage /> : <Redirect to='/' />)} />
            <Route path='/' component={HomePage} />
          </Switch>
        </div>
      </HashRouter>
      );
   }
}

const mapStateToProps = ({user}) =>({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
