import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducer from './_reducers';
import persistedReducer from './_reducers'; 
import { persistStore } from 'redux-persist'; 
import { PersistGate } from 'redux-persist/integration/react'; 

const store = createStore(
    persistedReducer,
    compose(
        applyMiddleware(promiseMiddleware, ReduxThunk)
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        //-- redux 확장프로그램이 깔려있어야 실행가능.
    )
); 
const persistor = persistStore(store); 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CookiesProvider>
        <BrowserRouter>
            <Provider
                store={store}
            >
                <PersistGate persistor={persistor}>
                    
                    
                    <App />
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </CookiesProvider>
);
