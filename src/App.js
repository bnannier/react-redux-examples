import React, { Component } from 'react';
import logo from '../public/img/logo.svg';

import StatelessWidget from './react/StatelessWidget';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      txt: 'txt = ',
      cat: 1
    }
    this.updateTxt = this.updateTxt.bind(this);
  }

  updateTxt(e) {
    this.setState({txt: e.target.value})
  }

  render() {
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>React Redux Labs</h2>
          </div>
          <h3>Lab 1: Working With States</h3>
          <StatelessWidget txt={this.state.txt} cat={this.props.cat} updateTxt={this.updateTxt}/>
          <hr />
        </div>
    );
  }
}

export default App;
