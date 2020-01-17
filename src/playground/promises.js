

const promise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
     resolve({ first: 'Nut', last: 'Weiner' })
    //reject('Something went wrong')
  }, 1500)
})

console.log('before')

promise.then((data)=>{
  console.log('1', data)
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
       resolve("This is my other promise")
    }, 1500)
  })
}).then((newData)=>{
  console.log('Does this run. YES IT DOES', newData)
}).catch((data)=>{
  console.log(data)
})



// OR

// promise.then((data)=>{
//   console.log('1', data)
// }, (error)=>{
//   console.log(error)
// })


console.log('after')
