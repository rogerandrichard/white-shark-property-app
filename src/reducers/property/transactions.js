const transactionsReducerDefaultState = [];

export default (state = transactionsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return [
        ...state,
        action.transaction
      ];
    case 'REMOVE_TRANSACTION':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_TRANSACTION':
      return state.map((transaction) => {
        if (transaction.id === action.id) {
          return {
            ...transaction,
            ...action.updates
          };
        } else {
          return transaction;
        };
      });
    case 'SET_TRANSACTIONS':
      console.log('TTTT', action.transactions)
      return action.transactions
    default:
      return state;
  }
};
