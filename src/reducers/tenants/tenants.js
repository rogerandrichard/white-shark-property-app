const tenantsReducerDefaultState = []

export default (state = tenantsReducerDefaultState, action)=>{
  console.log('Action', action)
  switch(action.type){
    case 'ADD_TENANT_PROFILE':
      return [
        ...state,
        action.tenant
      ]
    case 'EDIT_TENANT_PROFILE':
      return state.map((tenant)=>{
        if(tenant.id===action.id){
          return{
            ...tenant,
            ...action.updates
          }
        }else{
          return tenant
        }
      })


    case 'SET_TENANTS':
      return action.tenants
    default:
      return state
  }
}
