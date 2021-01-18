import './App.css';
import { Component } from 'react';
import HomePage from './pages/homepage.component';

import {Route, Link, Switch} from 'react-router-dom'



const ChurchListPage = (props) => {
  console.log(props);
  return(<div>
    <h1>
      CHURCH LIST
    </h1>
    <ul>
      <li><Link to={`${props.match.url}/1`}>1</Link></li>
      <li><Link to={`${props.match.url}/2`}>2</Link></li>
      <li><Link to={`${props.match.url}/3`}>3</Link></li>
      <li><Link to={`${props.match.url}/4`}>4</Link></li>
    </ul>
  </div>)
}

const ChurchDetailsPage = (props) => (
  <div style={{display:'block'}}>
    <h1>
      CHURCH DETAILS FOR {props.match.params.churchId}
    </h1>
    <Link to='/' style={{display:'block'}}>Home</Link>
    <Link to='/' style={{display:'block'}}>Back</Link>
  </div>
)

class App extends Component {
  render(){
    return (
        <div className="App">
          <Switch>
            <Route path='/church/:churchId' component={ChurchDetailsPage} />
            <Route path='/church' component={ChurchListPage} />
            <Route path='/' component={HomePage} />
          </Switch>
        </div>
      );
   }
}

export default App;
