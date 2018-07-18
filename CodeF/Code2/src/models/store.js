import {createStore, applyMiddleware} from 'redux';
import {reducer} from './calcreducer';
import {reducer2} from './reducer2';
import {combineReducers} from 'redux';
import thunk from 'redux-thunk';
const combined = combineReducers({reducer,reducer2});
export const centeralStore = createStore(combined,applyMiddleware(thunk));
// createStore(reducer)
console.log("Centeral Object ",centeralStore.getState());
