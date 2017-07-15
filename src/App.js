import React, {Component} from 'react';
import './App.css';
import InputForm from './input/Input';

class App extends Component {

  render() {
  
    return (
      <div className="App">
        <h1>Todo App</h1>
        <InputForm></InputForm>
       
      </div>
    );
  }
}

export default App;
