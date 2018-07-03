import React, { Component } from 'react';
import { connect } from 'react-redux';

// THIS COMPONENT IS OUR STATUS PAGE
// YOU SHOULD DISPLAY THE CURRENT SPEED FROM SECTION ONE
// YOU SHOULD DISPLAY THE COUNT OF PEOPLE CURRENTLY ON BOARD


const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
})

class SectionThree extends Component {

  render() {
    console.log(this.props);

    return (
      <div>
        <h2>Dashboard</h2>

        
        <p>The speed is currently:{this.props.reduxStore.speedReducer}</p>
       
        <p>The Passenger count:{this.props.reduxStore.passengerReducer.length}</p>

        
      </div>
    )

  }
}

export default connect(mapReduxStateToProps)(SectionThree);