import './App.css';
import { Component } from 'react';
import HomePage from './pages/homepage.component';

class App extends Component {
  render(){
    return (
        <div className="App">
          <HomePage></HomePage>
        </div>
      );
   }
}

export default App;
