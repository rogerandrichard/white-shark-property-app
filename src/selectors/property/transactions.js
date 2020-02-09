import moment from 'moment';

function checkLocationAndType(transaction, location, typeIncome){
  let locationOK = false
  let incomeOK = false
  if( !location || transaction.location === location ){
    locationOK = true
  }
  if( !typeIncome || transaction.typeIncome === typeIncome || transaction.typeIncome === 'All $'){
    incomeOK = true
  }
  return locationOK && incomeOK
}

export default (transactions, { text, location, typeIncome, sortBy, startDate, endDate }) => {
  return transactions.filter((transaction) => {
    const createdAtMoment = moment(transaction.createdAt);
    const locationMatch = location
    const typeIncomeMatch = typeIncome
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = transaction.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch && checkLocationAndType(transaction, location, typeIncome)
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};
