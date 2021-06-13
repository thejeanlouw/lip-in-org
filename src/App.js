import './App.css';
import { Component } from 'react';
import {Route, Link, Switch, HashRouter, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'

import HomePage from './pages/homepage/homepage.component';
import DonationPage from './pages/donation/donation.component'

import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { selectCurrentUser } from './redux/user/user.selectors'

import CheckoutPage from './pages/checkout/checkout.component';

class App extends Component {

  render(){
    const { currentUser } = this.props;
    return (
        <div className="App">
          <Header />
          <Switch>
            <Route path='/checkout' component={CheckoutPage} />
            <Route path='/donate' component={DonationPage} />
            <Route 
              path='/signin' 
              render={() => 
                (currentUser == null ? 
                <SignInAndSignUpPage /> : 
                <Redirect to='/' />)} 
            />
            <Route path='/' component={HomePage} />
          </Switch>
        </div>
      );
   }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})


export default connect(mapStateToProps)(App);
