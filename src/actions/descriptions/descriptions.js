import database from '../../firebase/firebase'

export const addDescription = (description)=>(
  {
    type: 'ADD_DESCRIPTION',
    description
  }
)


export const startAddDescription = (descriptionData = {})=>{
  return (dispatch, getState)=> {
    const uid = getState().auth.uid
    const {
      description = ''
    } = descriptionData
    const newDescription = { description }
    return database.ref(`users/${uid}/descriptions`).push(newDescription).then((ref)=>{
      dispatch(addDescription({
        id: ref.key,
        ...description
      }))
    })
  }
}



export const setDescriptions = (descriptions)=>({
  type: 'SET_DESCRIPTIONS',
  descriptions
})


export const startSetDescriptions = ()=>{
  return (dispatch, getState)=> {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/descriptions`)
    .once('value')
    .then((snapshot)=>{
      const descriptions = []
      snapshot.forEach((childSnapshot)=>{
        descriptions.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })
      dispatch(setDescriptions(descriptions))
    })
  }
}
