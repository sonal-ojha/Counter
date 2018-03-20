import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';
import connect from 'react-redux';
import store from './store/store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Counter Example</h3>
        <Counter store={store}/>
      </div>
    );
  }
}

export default App;
