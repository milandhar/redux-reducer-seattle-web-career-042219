export function manageFriends(state, action){
  switch(action.type){
    case('ADD_FRIEND'):
    let newFriends = state.friends.slice()
    newFriends.push(action.friend)
    return {...state, friends: newFriends};

    case('REMOVE_FRIEND'):
    console.log('in here')
    let foo = state.friends.slice()
    foo = newFriends.filter((friend) => friend.id !== action.id)

  default:
    return state
  }
}
