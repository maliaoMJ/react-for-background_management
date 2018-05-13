import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/style/index.css';
import 'element-theme-default';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
