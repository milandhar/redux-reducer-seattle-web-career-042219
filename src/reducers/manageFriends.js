export function manageFriends(state, action){
  switch(action.type){
    case('ADD_FRIEND'):
    console.log(action.friend)
    return {...state};

  default:
    return state
  }
}
