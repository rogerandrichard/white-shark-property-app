import moment from 'moment';

// Filters Reducer

const filtersReducerDefaultState = {
  name: '',
  typeTenant: 'All',
  location: 'None Selected',
};

export default (state = filtersReducerDefaultState, action) => {
  console.log('ACTION', action)
  switch (action.type) {
    case 'SET_NAME_FILTER':
      return {
        ...state,
        name: action.name
      };
    case 'SORT_BY_TYPE':
      return {
        ...state,
        typeTenant: action.typeTenant
      };
    case 'SORT_BY_ADDRESS':
      return {
        ...state,
        address: action.address
      };
    default:
      return state;
  }
};
