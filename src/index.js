import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App.jsx';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorkerRegistration.register();
