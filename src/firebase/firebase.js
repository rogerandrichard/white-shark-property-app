import * as firebase from 'firebase'


  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectID: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}



// }else if(process.env.NODE_ENV === 'production'){
//   firebaseConfig = {
//    apiKey: process.env.FIREBASE_API_KEY,
//    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//    databaseURL: "https://expensify-21168.firebaseio.com",     //process.env.FIREBASE_DATABASE_URL,
//    projectID: process.env.FIREBASE_PROJECT_ID,
//    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
//  }
// }


firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export { firebase, database as default }


// let testData = {name: 'Nut', color: 'black', color: 'red'}
// console.log(testData)
//
// const testFunction = (testData = {})=>{
//   const {
//     name = '',
//     color = '',
//     sex = 'male'
//   } = testData
//   console.log('Test Data', testData)
// }
// testFunction(testData)


// database.ref('expenses').on('child_added', (snapshot)=>{
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot)=>{
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_removed', (snapshot)=>{
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses')
// .on('value', (snapshot)=>{
//   const expenses = []
//   snapshot.forEach((childSnapshot)=>{
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log('Expenses', expenses)
// }, (e)=>{
//   console.log('Error creating expense array', e)
// })
//
// setTimeout(()=>{
// database.ref('expenses/-Lyap5EC8WWKDqfRQMMv').update({
//   description: 'Ride a wave',
// })
// }, 3000)


// database.ref('expenses')
// .once('value')
// .then((snapshot)=>{
//   const expenses = []
//   snapshot.forEach((childSnapshot)=>{
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses)
// })

// database.ref('expenses').push({
//   description: 'Ride a bike',
//   note: 'aaa',
//   amount: 50000,
//   createdAt: 1000
// })
//
// database.ref('expenses').push({
//   description: 'Ride a streak',
//   note: 'aaa',
//   amount: 80000,
//   createdAt: 21000
// })





// database.ref('notes/-Lyan0gppEeNF4UKNgYD').update({
//   body: 'Hee Haw'
// })

// database.ref('notes/-Lyan0gppEeNF4UKNgYD').remove()

// database.ref('notes').push({
//   title: 'To Do Again',
//   body: 'Go for a run again'
// })

// database.ref().on('value', (snapshots)=>{
//   const snap = snapshots.val()
//   console.log(`${snap.name} is a ${snap.job.title} at ${snap.job.company}`)
// })
//
// setTimeout(()=>{
//   database.ref().update({
//     name: 'Pee Wee Hole',
//     'job/title': 'Nut Butt',
//     'job/company': 'Twitter sis'
//   })
//   .then(()=>{
//     console.log('Update was successful')
//   })
//   .catch((e)=>{
//     console.log('Update was failed')
//   })
// }, 3000)

//Fetch data a over and over(once) can ref root(ref()) or ref('location')
// const onValueChange = database.ref()
//   .on('value', (snapshot)=>{
//     console.log(snapshot.val())
//   }, (e)=>{
//     console.log('Error with data fetching', e)
//   })
//
//
// setTimeout(()=>{
//   database.ref('age').set(25)
// }, 3500)
//
// setTimeout(()=>{
//   database.ref().off('value', onValueChange)
// }, 7000)
//
// setTimeout(()=>{
//   database.ref('age').set(30)
// }, 10500)

//Fetch data a single time(once) can ref root(ref()) or ref('location')
// const onValueChange_FirstWay = database.ref()
//   .once('value')
//   .then((snapshot)=>{
//     console.log(snapshot.val())
//     console.log('Data fetch was successful')
//   })
//   .catch((e)=>{
//     console.log('Error with data fetching', e)
//   })
//
// const onValueChange_SecondWay = database.ref()
//   .once('value', (snapshot)=>{
//     console.log(snapshot.val())
//     console.log('Data fetch was successful')
//   })
//   .catch((e)=>{
//     console.log('Error with data fetching', e)
//   })





  // database.ref().update({
  //   stressLevel: 9,
  //   'job/company': 'Amazon',
  //   'location/city': 'Seattle'
  // }).then(()=>{
  //   console.log('Update is Successful!!')
  // }).catch((e)=>{
  //   console.log('Update Failed', e)
  // })






// One way of getting data
// database.ref('location/city')
//   .once('value')
//   .then((snapshot)=>{
//     console.log(snapshot.val())
//   })
//   .catch((e)=>{
//     console.log('Error fetching data', e)
//   })


// if(false){
//   database.ref().set({
//     name: 'Nut Weiner Bum',
//     age: 51,
//     stressLevel: 6,
//     job: {
//       title: 'labour',
//       company: 'Maple Leafs'
//     },
//     isSingle: false,
//     location: {
//       city: 'Oro Medonte',
//       country: 'Canada'
//     }
//   }).then(()=>{
//     console.log('Data is saved!')
//   }).catch((e)=>{
//     console.log('This failed', e)
//   })
// }
//
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// }).then(()=>{
//   console.log('Update is Successful!!')
// }).catch((e)=>{
//   console.log('Update Failed', e)
// })

// database.ref('isSingle').remove().then(()=>{
//   console.log('Removed Successfully!!')
// }).catch((e)=>{
//   console.log('Remove Failed!!', e)
// })
