import React, { Component } from 'react';
import './App.css';
import TaskList from "./TaskList"
class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskList />
      </div>
    );
  }
}

export default App;
