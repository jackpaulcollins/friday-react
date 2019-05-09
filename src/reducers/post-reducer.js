import { initialState } from '../constants/initialState';
import c from './../constants';


export function postReducer(state = initialState, action){
  switch (action.type){
  case c.NEW_POST:
    console.log(state)
    console.log(action.post)
    let newState = state.slice();
    newState.push(action.post)
      return newState;


  case c.NEW_LIKE:
    console.log('reducer', action.id)
    
  default:
    return state;
  }
}
