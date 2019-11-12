const initialState = {
  i: 0,
  other: 5,
}
const blankReducer = function(state = initialState, action) {
  switch(action.type){
    case "INCREMENT":
      return {
        ...state,
        i: state.i+1
      }
    case "INCREMENT_OTHER":
      return {
        ...state,
        other: state.other+1
    }
    default: return state;
  }
}

export default blankReducer;
