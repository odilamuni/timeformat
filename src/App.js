import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TimeNow from './TimeNow';
// import { Timing } from './Timing';
// import {GetHr} from './GetHr';

class App extends Component {
  render() {
    // let option = '24';
    return (
      <div className="App">
        <TimeNow/>
        
      </div>
    );
  }
}

export default App;
