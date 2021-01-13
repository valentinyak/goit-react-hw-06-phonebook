import shortid from 'shortid';

export default function contactsReducer(
  state = [
    { id: shortid.generate(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: shortid.generate(), name: 'Hermione Kline', number: '443-89-12' },
    { id: shortid.generate(), name: 'Eden Clements', number: '645-17-79' },
    { id: shortid.generate(), name: 'Annie Copeland', number: '227-91-26' },
  ],
  action,
) {
  switch (action.type) {
    case 'contacts/add':
      return [...state, action.payload];

    case 'contacts/delete':
      return state.filter(contact => contact.id !== action.payload);

    default:
      return state;
  }
}
