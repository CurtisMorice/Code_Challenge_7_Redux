import React, { Component } from 'react';
import { connect } from 'react-redux';
import SectionThree from '../SectionThree/SectionThree';

// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN
// YOU SHOULD DISPLAY THE CURRENT PASSENGERS
// INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST
const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
})

class SectionTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passenger:''
    }
  }

  handlePassengers = (event) => {
    this.setState({
      passenger: event.target.value
    })
  }

  addPassengers = () => {
    const action = {type: 'ADD_PASSENGER', payload: this.state.passenger};
    this.props.dispatch(action);
  }

  render() {
    return (
      <div>
        <h2>Passengers</h2>
        
     
        <input type="text" name="name" placeholder="Enter Name" onChange={this.handlePassengers} value={this.state.passenger} />
        <button onClick={this.addPassengers}> Add Passenger </button>
        <ul>
          <SectionThree />
        </ul>
      </div>
    )
  }
}

export default connect(mapReduxStateToProps)(SectionTwo);