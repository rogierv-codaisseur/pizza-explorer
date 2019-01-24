import React, { Component } from 'react';
import './App.css';
import PizzaListContainer from './components/PizzaListContainer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <main>
          <PizzaListContainer />
        </main>
      </div>
    );
  }
}

export default App;
