

const propertyData = [
  {
    address: '47 Holland Avenue',
    city: 'Toronto',
    province:  'Ontario',
    country: 'Canada',
    postcode: 'M4B 2C7'
  },
  {
    address: 'Whayy Yuhhh',
    city: '',
    province:  '',
    country: '',
    postcode: ''
  }
]

export const address_array = ()=>{
  return propertyData.map((data)=>{
    return data.address
  })
}
