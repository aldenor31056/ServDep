import { combineReducers } from 'redux';
import DepedenteReducer from './DependenteReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  dependentes: DepedenteReducer,
  selectedDependenteId: SelectionReducer
});


