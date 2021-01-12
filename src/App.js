import './App.css';
import { Component } from 'react';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

class App extends Component {
  constructor(){
    super();
    this.state = {
      searchPhrase: '',
      goodSouls: []
    }
  }

  changeState = (e) =>
  {
    console.log(e.target.value)
    this.setState({searchPhrase:e.target.value});
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(json=>{
      console.log(json);
      this.setState({goodSouls:json});
      this.setState({mappedSouls:json});});
  }

  render(){
    const { goodSouls, searchPhrase } = this.state; 
    const filteredSouls = goodSouls.filter(s => s.name.toLowerCase().includes(searchPhrase.toLowerCase()))
      return (
        <div className="App">
          <h1>Lip-In.Org</h1>
          <p>Be the gift to one of these beautiful souls:</p>
          <SearchBox placeholder='Search Souls' handleChange={this.changeState}/>
          <CardList souls={filteredSouls}/>
        </div>
      );
   }
}

export default App;
