import {createStore} from 'redux';
import {reducer} from './calcreducer';
export const centeralStore = createStore(reducer);
console.log("Centeral Object ",centeralStore.getState());
