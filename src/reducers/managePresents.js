export function managePresents(state = {numberOfPresents: 0}, action){
  let currNum = state.numberOfPresents;
  switch(action.type){
    case ("Increase"):
      return {numberOfPresents: currNum + 1};

    default:
      return state;
  }

}
