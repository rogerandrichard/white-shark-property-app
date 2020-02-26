export const setNameFilter = (name = '') => ({
  type: 'SET_NAME_FILTER',
  name
});

export const sortByType = (typeTenant) => {
  return {
    type: 'SORT_BY_TYPE',
    typeTenant
  }
};


export const sortByAddress = (address) => ({
  type: 'SORT_BY_ADDRESS',
  address
});
