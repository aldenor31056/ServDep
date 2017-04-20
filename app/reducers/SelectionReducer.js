export default (state = null, action) => {
  switch (action.type) {
    case 'select_dependente':
      return action.payload;
    default:
      return state;
  }
};
