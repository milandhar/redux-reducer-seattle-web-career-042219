export function manageFriends(state, action){
  switch(action.type){
    case('ADD_FRIEND'):
    return {...state, action.friend}
  default:
  return state
  }
}
