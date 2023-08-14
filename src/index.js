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
import persistedReducer from './_reducers'; //추가
import { persistStore } from 'redux-persist'; // 추가
import { PersistGate } from 'redux-persist/integration/react'; // 추가
//import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

// const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);
const store = createStore(
    persistedReducer,
    compose(
        applyMiddleware(promiseMiddleware, ReduxThunk)
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        //-- redux 확장프로그램이 깔려있어야 실행가능.
    )
); //수정
const persistor = persistStore(store); // 추가
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals