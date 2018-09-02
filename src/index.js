import React from 'react';
import ReactDOM from 'react-dom';
import ContactDetails from './components/ContactDetails';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <ContactDetails />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();









