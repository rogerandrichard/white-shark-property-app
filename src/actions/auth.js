import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase'

export const login = (uid, photoURL)=>({
  type: 'LOGIN',
  uid,
  photoURL
})

export const startLogin = ()=> {
    return ()=> {
      return firebase.auth().signInWithPopup(googleAuthProvider)
  }
}

export const startLogin_f = ()=> {
  var provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider).then(function(result) {
    var user = result.user;
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  });
}



export const logout = ()=>({
  type: 'LOGOUT'
})

export const startLogout = ()=> {
  return ()=> {
    return firebase.auth().signOut()
  }
}


export const loginManual = ({name, password})=>{
  return {
    type: 'LOGIN_MANUAL',
    name,
    password
  }
}
