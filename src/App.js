import './App.css';
import { Component } from 'react';
import HomePage from './pages/homepage/homepage.component';
import DonationPage from './pages/donation/donation.component'

import {Route, Link, Switch} from 'react-router-dom'
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

class App extends Component {
  render(){
    return (
        <div className="App">
          <Header />
          <Switch>
            <Route path='/donate' component={DonationPage} />
            <Route path='/signin' component={SignInAndSignUpPage} />
            <Route path='/' component={HomePage} />
          </Switch>
        </div>
      );
   }
}

export default App;
