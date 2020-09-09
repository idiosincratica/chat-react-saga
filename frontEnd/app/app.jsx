import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './mainComponent';
import './index.less';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/reducersCombined';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware } from 'redux';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <MainComponent/>
    </Provider>,
    document.querySelector('#root')
);
