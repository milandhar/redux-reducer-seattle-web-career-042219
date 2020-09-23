export function manageFriends(state, action){
  switch(action.type){
    case('ADD_FRIEND'):
    let newFriends = state.friends.slice()
    newFriends.push(action.friend)
    return {...state, friends: newFriends};
  switch(action.type){
    case('REMOVE_FRIEND'):
    let newFriends = state.friends.slice()
    console.log(newFriends)
    newFriends = newFriends.filter((friend) => friend.id !== action.id)
    }
  default:
    return state
  }
}
