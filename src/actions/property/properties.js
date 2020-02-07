import database from '../../firebase/firebase'


export const addPropertyProfile = (profile)=> ({
  type: 'ADD_PROPERTY_PROFILE',
  profile
});

export const startAddPropertyProfile = (profileData = {})=>{
  return (dispatch, getState)=> {
    const uid = getState().auth.uid
    const {
      address = '',
      city = '',
      province = '',
      country = '',
      postcode = '',
    } = profileData
    const profile = { address, city, province, country, postcode }
    return database.ref(`users/${12161026}/profiles`).push(profile).then((ref)=>{
      dispatch(addPropertyProfile({
        id: ref.key,
        ...profile
      }))
    })
  }
}