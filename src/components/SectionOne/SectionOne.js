import React, { Component } from 'react';
import { connect } from 'react-redux';
import SectionThree from '../SectionThree/SectionThree';


const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
})

// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY
class SectionOne extends Component {
  render() {
    return (
      
      <div>
        <h2>Speed Control</h2>
        
        
        <button onClick={() => this.props.dispatch({type: 'INCREASE_SPEED'})}>Increase Speed</button>
        <p>{this.props.reduxStore.speedReducer}</p>
        <button onClick={() => this.props.dispatch({type: 'DECREASE_SPEED'})}>Decrease Speed</button>
      </div>
    )
  }
}

export default connect(mapReduxStateToProps)(SectionOne);