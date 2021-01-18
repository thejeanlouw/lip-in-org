import './App.css';
import { Component } from 'react';
import HomePage from './pages/homepage/homepage.component';
import DonationPage from './pages/donation/donation.component'

import {Route, Link, Switch} from 'react-router-dom'

class App extends Component {
  render(){
    return (
        <div className="App">
          <Switch>
            <Route path='/donate' component={DonationPage} />
            <Route path='/' component={HomePage} />
          </Switch>
        </div>
      );
   }
}

export default App;
