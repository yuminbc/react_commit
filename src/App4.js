// import './App.css';
import React, { Component } from 'react'; 
// import Button from './Button';
import Nav from './Nav'

class App4 extends Component {
  state = {
    menus:[
      {
        siteTitle:'구글',
        siteUrl:'https://google.com'
      },
      {
        siteTitle:'네이버',
        siteUrl:'https://naver.com'
      },
      {
        siteTitle:'사전 검색 서비스',
        siteUrl:'https://yuminbc.github.io/dictionary/'
      }
    ]
  }

// handleClick = () => alert('clicked button')

  render(){
    return (
      <div className="App">
        <Nav menus={this.state.menus}></Nav>
      </div>
    );
  }
}

export default App4;