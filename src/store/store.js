import { createStore, applyMiddleware } from 'redux'
import userNameReducer from './reducer1.js';
import createSagaMiddleware from 'redux-saga';       // 引入redux-saga中的createSagaMiddleware函数
import rootSaga from './saga.js';                    // 引入saga.js

const sagaMiddleware = createSagaMiddleware()        // 执行

const reducerAll = {
    userNameReducer,
}


export const store = createStore(
    // combineReducers({...reducerAll}),               // 合并reducer
    userNameReducer,
    // window.devToolsExtension ? window.devToolsExtension() : undefined,    // dev-tools
    applyMiddleware(sagaMiddleware)                 // 中间件，加载sagaMiddleware
)

sagaMiddleware.run(rootSaga)                        // 执行rootSaga
