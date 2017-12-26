import React from 'react';
import ReactDOM from 'react-dom';

import App from './routes/app';
import registerServiceWorker from './registerServiceWorker';

import './styles/app.css';
import './styles/router.css';
import './styles/css/font-awesome.min.css';
import './styles/css/bootstrap.4.0.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
