import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState()));

ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'));
