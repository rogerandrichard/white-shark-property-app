const propertiesReducerDefaultState = []

export default (state = propertiesReducerDefaultState, action)=>{
  switch(action.type){
    case 'ADD_PROPERTY_PROFILE':
      return [
        ...state,
        action.profile
      ]
    default:
    return state
  }
}
