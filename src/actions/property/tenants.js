import database from '../../firebase/firebase'


export const addTenantProfile = (tenant)=> ({
  type: 'ADD_TENANT_PROFILE',
  tenant
});

export const startAddTenantProfile = (tenantData = {})=>{
  return (dispatch, getState)=> {
    const uid = getState().auth.uid
    const {
      address = '',
      name = '',
      home = '',
      cell = '',
      email = '',
      startDate = '',
      endDate = ''
    } = tenantData
    const tenant = { address, name, home, cell, email, startDate, endDate }
    return database.ref(`users/${12161026}/tenants`).push(tenant).then((ref)=>{
      dispatch(addTenantProfile({
        id: ref.key,
        ...tenant
      }))
    })
  }
}
