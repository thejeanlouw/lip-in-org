import './App.css';
import { Component } from 'react';
import HomePage from './pages/homepage/homepage.component';
import DonationPage from './pages/donation/donation.component'

import {Route, Link, Switch, HashRouter} from 'react-router-dom'
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth } from './firebase/firebase.utils'
import { createUserProfileDocument } from './firebase/firebase.functions'

class App extends Component {

  unsubscribeFromAuth = null;

  constructor(){
    super();
    this.state = {
      currentUser: null,
    }
  }

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          
          this.setState({currentUser: 
            {
              id: snapShot.id,
              ...snapShot.data
            }
          });
        })
      }
      this.setState({currentUser: userAuth});
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <HashRouter basename='/'>
        <div className="App">
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route path='/donate' component={DonationPage} />
            <Route path='/signin' component={SignInAndSignUpPage} />
            <Route path='/' component={HomePage} />
          </Switch>
        </div>
      </HashRouter>
      );
   }
}

export default App;
