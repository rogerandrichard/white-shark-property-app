
const descriptionsDefaultState = []

export default (state = descriptionsDefaultState, action)=>{
  switch(action.type){
    case 'ADD_DESCRIPTION':
      return [
        ...state,
        action.description
      ]
    case 'SET_DESCRIPTIONS':
      return action.descriptions

    default:
      return state
  }
}
