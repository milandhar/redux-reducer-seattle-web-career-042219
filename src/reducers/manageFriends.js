export function manageFriends(state, action){
  switch(action.type){
    case('ADD_FRIEND'):
    let newFriends = state.friends.slice()
    newFriends.push(action.friend)
    return {...state, friends: newFriends};

  default:
    return state
  }
}
