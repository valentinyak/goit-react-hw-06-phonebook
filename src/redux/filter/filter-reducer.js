const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'filter/changeFilter':
      return action.payload;

    default:
      return state;
  }
};

export default filterReducer;
