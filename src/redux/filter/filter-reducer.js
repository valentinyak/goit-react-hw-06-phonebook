export default function filterReducer(state = '', action) {
  switch (action.type) {
    case 'filter/changeFilter':
      return action.payload;

    default:
      return state;
  }
}
