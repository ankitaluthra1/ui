import {combineReducers, createStore} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {composeWithDevTools} from 'redux-devtools-extension';

const reducers = combineReducers({
  form: formReducer,
});
const store = createStore(
  reducers,
  composeWithDevTools(),
);

export default store;
