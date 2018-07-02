import React, { Component } from 'react';
import { connect } from 'react-redux';

import SectionTwo from '../SectionTwo/SectionTwo';
// THIS COMPONENT IS OUR STATUS PAGE
// YOU SHOULD DISPLAY THE CURRENT SPEED FROM SECTION ONE
// YOU SHOULD DISPLAY THE COUNT OF PEOPLE CURRENTLY ON BOARD
const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
})

class SectionThree extends Component {
  
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <p>{this.props.reduxStore.speedReducer}</p>
       
       
        
      {this.props.reduxStore.passengerReducer.map((person, i) => {
          return <SectionTwo person={person} key={i}/>
        })}

        
      </div>
    )

  }
}

export default connect(mapReduxStateToProps)(SectionThree);