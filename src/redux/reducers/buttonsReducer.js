import { combineReducers } from 'redux';

//WRITE REDUCERS HERE

let defaultState = ['Curtis'];

const passengerReducer = (state = defaultState, action) => {
if(action.type === 'ADD_PASSENGER'){
  return [...state, action.payload];
}
return state
}


const speedReducer = (state = 0 , action) => {
  if(action.type === 'INCREASE_SPEED') {
    console.log(`Hey!!! I'm a reducer.`, action);
    // return the new state
    return state + 5;
    // nothing after a return is called
}
if (action.type === 'DECREASE_SPEED' && state > 0) {
    return state - 5;
}
return state; // return the current state if no changes were made
}

export default combineReducers({
  //COMBINE YOUR REDUCERS HERE
  passengerReducer,
  speedReducer

});