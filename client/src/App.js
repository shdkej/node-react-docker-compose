import React, { Component } from 'react';
import Board from './Board.js';
//import './App.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState(res))
      .catch(console.error);
  }

  callApi = async () => {
    const resp = await fetch('/api');

    window._resp = resp;

    let text = await resp.text();

    let data = null;
    try {
      data = JSON.parse(text); // cannot call both .json and .text - await resp.json();
    } catch (e) {
      console.err(`Invalid json\n${e}`);
    }

    if (resp.status !== 200) {
      throw Error(data ? data.message : 'No data');
    }

    return data;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Goal</h1>
        </header>
        <Board/>
      </div>
    );
  }
}

export default App;
