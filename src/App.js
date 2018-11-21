import React, { Component } from 'react';
import Counter from './components/Counter/Counter';
import Header from './components/Header/Header';

import './App.css';

class App extends Component {

   state = {
      counter: 0
  }

  incrementCounterHandler = () =>{
    const oldCounter = this.state.counter;
    const updatedCounter = oldCounter +1;
    this.setState({counter:updatedCounter});

  }

  decrementCounterHandler = () =>{

    const oldCounter = this.state.counter;
    const updatedCounter = oldCounter -1;
    this.setState({counter:updatedCounter});

  }

  resetCounterHandler = () =>{
    const updatedCounter = 0;
    this.setState({counter:updatedCounter});
  }


  render() {
    return (
      <div className="App">
        <Header/>
        <Counter 
          ticker={this.state.counter}
          increment = {this.incrementCounterHandler} 
          decrement = {this.decrementCounterHandler} 
          resetCounter = {this.resetCounterHandler}
          />
      </div>
    );
  }
}

export default App;
