//Neste exemplo faremos um CONTADOR. Que irá diminiur / subtrair
import React, { Component, useState } from 'react'
import { connect } from 'react-redux'


class Counter extends React.Component{
  state = { count: 0 }


  increment = () =>{
    this.props.dispatch({type: 'INCREMENT'})
  }

  decrement = () =>{
    this.props.dispatch({type: 'DECREMENT'})
  }

  
  render(){
    return (
    <div>
      <h1>Counter</h1>
      <div>
      <button onClick={this.increment}>+</button>
      <span>{this.props.count}</span>
      <button onClick= {this.decrement}>-</button>
      </div>
    </div>
    )
  }
}

function mapStateToProps(state){
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);