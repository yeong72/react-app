import { Component } from 'react';
import './App.css';
import './style.css';
import styled from "styled-components";
// import Search from "./component/Search";

class App extends Component {
  state = {
    query: ""
  };
  render() {
    return (
      <Background query={this.state.query}>
        <input class="search" placeholder="테마를 입력하세요" onKeyPress={this.handleKeyPress}></input>
      </Background>
    );
  }
  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.setState({
        query: event.target.value
      });
      event.target.value = "";
    }
  }
}

const Background = styled.div`
  position:absolute;
  z-index:-1;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-size: cover;
  background: linear-gradient(
    to right,
    rgba(20, 20, 20, 0.1) 10%,
    rgba(20, 20, 20, 0.7) 70%,
    rgba(20, 20, 20, 1)
    ),
    url(https://source.unsplash.com/random/1920x1080?${props => props.query});
`;

export default App;
