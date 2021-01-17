export default function changeFilter(value) {
  return {
    type: 'filter/changeFilter',
    payload: value,
  };
}
