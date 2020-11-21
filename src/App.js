import { Component } from 'react';
import './App.css';



class Header extends Component {
  render() {
    return (
      <h1>{this.props.title}</h1>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
