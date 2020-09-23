export function manageFriends(state, action){
  switch(action.type){
    case('ADD_FRIEND'):
    console.log(action.friend)
    console.log(state)
    return {...state, friends: {state.friends, action.friend}};

  default:
    return state
  }
}
