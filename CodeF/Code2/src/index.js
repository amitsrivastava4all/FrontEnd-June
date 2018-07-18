import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {centeralStore} from './models/store';
import App from './App';


ReactDOM.render(<Provider store = {centeralStore}><App /></Provider>, document.getElementById('root'));

