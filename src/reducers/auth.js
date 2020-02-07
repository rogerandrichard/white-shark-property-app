export default (state = {}, action)=>{
  switch(action.type) {
    case 'LOGIN':
      return {
        uid: action.uid,
        photoURL: action.photoURL
      }

    case 'LOGIN_MANUAL':
      return {
        uid: action.password
      }

    case 'LOGOUT':
      return {}
    default:
      return state
  }
}
