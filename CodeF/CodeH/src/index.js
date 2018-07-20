import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App a="10" b="20" />, document.getElementById('root'));
registerServiceWorker();
