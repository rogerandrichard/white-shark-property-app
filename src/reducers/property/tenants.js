const tenantsReducerDefaultState = []

export default (state = tenantsReducerDefaultState, action)=>{
  switch(action.type){
    case 'ADD_TENANT_PROFILE':
      return [
        ...state,
        action.profile
      ]
    default:
    return state
  }
}
