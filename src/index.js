import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import State from './State';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<State />, document.getElementById('state'));

serviceWorker.unregister();
