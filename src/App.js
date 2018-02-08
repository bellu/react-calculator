import React, { Component } from 'react';
import Numbers from './components/Numbers/Numbers';
import Operators from './components/Operators/Operators';

import './App.css';

class App extends Component {

  state = {
    display: 0,
    elements: [],
    numbers: [],
    lastOperator: '',
  }

  resetDisplayHandler = () => {
    this.setState({
      display: 0,      
      elements: [],
      numbers: [],
      lastOperator: ''
    })
  }

  clickedNumberHandler = (ele) => {
    const elements = [...this.state.elements];
    
    elements.push(Number(ele));
    this.setState({
      elements: elements,
      display: Number(elements.join(''))
    })

  }

  operatorHandler = (operator) => {
    const elements = [...this.state.elements];
    const numbers = [...this.state.numbers];
    const lastOperator = this.state.lastOperator;

    let display = this.state.display;

    numbers.push(Number(elements.join('')));
    
    this.setState({
      numbers: numbers,
      elements: [],
      lastOperator: (!lastOperator || lastOperator === 'equal') ? operator : lastOperator
    })

    if(numbers.length === 2){
      switch (lastOperator) {
        case 'plus':
          display = numbers.reduce( (a,b) => a + b);
        break;

        case 'minus':
          display = numbers.reduce( (a,b) => a - b);
        break;

        case 'divide':
          display = numbers.reduce( (a,b) => a / b);
        break;

        case 'multiply':
          display = numbers.reduce( (a,b) => a * b);
        break;
      
        default:
          break;
      }

      this.setState({
          display: display,
          numbers: [display],
          lastOperator: operator
        });
      }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{this.state.display}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <Numbers reset={this.resetDisplayHandler} clickedNumber ={this.clickedNumberHandler} />
            </div>
            <div className="col-md-4">
              <Operators sumClicked={() => this.operatorHandler('plus')} 
                minusClicked={() => this.operatorHandler('minus')} 
                equalClicked={() => this.operatorHandler('equal')}
                divideClicked={() => this.operatorHandler('divide')}
                multiplyClicked={() => this.operatorHandler('multiply')} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
