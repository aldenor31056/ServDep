export const selectDependente = (dependenteId) => {
  return {
    type: 'select_dependente',
    payload: dependenteId
  };
};

