export function managePresents(state = {numberOfPresents: 0}, action){
  switch(action.type){
    case ("Increase"):
      return {numberOfPresents: state.numberOfPresents + 1};

    default:
      return state; 
  }

}
