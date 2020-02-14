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
      startDate = 0,
      endDate = 0,
      notes = ''
    } = tenantData
    const tenant = { address, name, home, cell, email, startDate, endDate, notes }
    return database.ref(`users/${12161026}/tenants`).push(tenant).then((ref)=>{
      dispatch(addTenantProfile({
        id: ref.key,
        ...tenant
      }))
    })
  }
}

// EDIT_TRANSACTION
export const editTenant = (id, updates) => ({
  type: 'EDIT_TENANT',
  id,
  updates
});

export const startEditTenant = (id, updates)=>{
  return (dispatch, getState)=>{
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/tenants/${id}`).update(updates)
    .then(()=>{
      dispatch(editTenant(id, updates))
    })
  }
}

export const setTenants = (tenants)=>({
  type: 'SET_TENANTS',
  tenants
})

export const startSetTenants = ()=>{
  return (dispatch, getState)=> {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/tenants`)
    .once('value')
    .then((snapshot)=>{
      const tenants = []
      snapshot.forEach((childSnapshot)=>{
        tenants.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })
      dispatch(setTenants(tenants))
    })
  }
}
