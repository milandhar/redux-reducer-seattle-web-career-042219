export function managePresents(state = {numberOfPresents: 0}, action){
  let currNum = state.numberOfPresents;
  switch(action.type){
    case ("INCREASE"):
    console.log(currNum)
      return {numberOfPresents: currNum + 1};

    default:
      return state;
  }

}
