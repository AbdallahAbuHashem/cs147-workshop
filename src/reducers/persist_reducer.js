const initialState = {
  other: 5,
}
const blankReducer = function(state = initialState, action) {
  switch(action.type){
    case "INCREMENT_OTHER":
      return {
        ...state,
        other: state.other+1
    }
    default: return state;
  }
}

export default blankReducer;
