
const transactions = [5, 6, 7, 8, 9]

export default ()=>{
  return [5, 6, 7, 8, 9]
    .map((num)=>num)
    .reduce(
      (sum, amount, index, array)=> {
        console.log('Sum', sum)
        console.log('Amt', amount)
        console.log('Index', index)
        console.log('Array', array)
        console.log('____________________________________________')
        sum-=amount
        console.log('Will return total', sum)
        return sum
      }
      ,
       0)
}
