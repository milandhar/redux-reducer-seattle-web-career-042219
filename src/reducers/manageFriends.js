export function manageFriends(state, action){
  switch(action.type){
    case('ADD_FRIEND'):
    console.log(action)
    console.log(state)
    let newFriends = state.friends.slice()
    newFriends.push(action.friend)
    return {...state, friends: newFriends};

  default:
    return state
  }
}
