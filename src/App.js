import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../public/img/logo.svg';

import StatelessWidget from './react/StatelessWidget';
import StateSlider from './react/StateSlider';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      txt: 'txt = ',
      cat: 1,
      red: 0,
      green: 0,
      blue: 0
    }
    this.updateTxt = this.updateTxt.bind(this);
    this.updateSlider = this.updateSlider.bind(this);
  }

  updateTxt(e) {
    this.setState({txt: e.target.value})
  }

  updateSlider(e) {
    this.setState(
        {
          red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
          green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
          blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value,
        }
    );
  }

  render() {
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>React Redux Labs</h2>
          </div>
          <h3>Lab 1: Working With States</h3>
          <StatelessWidget txt={this.state.txt} cat={this.state.cat} updateTxt={this.updateTxt}/>
          <hr />
          <h3>Lab 2: Reusable React Components with Composable APIs</h3>
          <StateSlider ref="red" min={0} max={255} step={0.01} val={+this.state.red} label="Red" updateSlider={this.updateSlider} />
          <StateSlider ref="green" min={0} max={255} step={0.01} val={+this.state.green} label="Green" updateSlider={this.updateSlider} />
          <StateSlider ref="blue" min={0} max={255} step={0.01} val={+this.state.blue} label="Blue" updateSlider={this.updateSlider} />
          <hr />
        </div>
    );
  }
}

export default App;
