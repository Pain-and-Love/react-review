// import { createStore } from 'redux';
const createStore = require('redux').createStore;

// reducer 后期通过combineReducers合并成一个，放入createStore中
// 保证是纯函数，不可更改state。  固定输入 -> 固定输出，没有副作用
const counterReducer = (state = 0, action)=>{
    switch(action.type) {
        // 经过一顿处理之后， 最终return出去的值,就是新的state
        case 'add': return state + action.payload;
    }
}

// store 后期放在Provider中
const store = createStore(counterReducer);

// subscribe 后期放在Provider中
store.subscribe(function() {
    console.log('state changed', store.getState())
    // this.setState(store.getState())
})

// React Comp handle中
// actionType也需要统一actionsType.js中 
// 这种将字符串定义成常量的目的主要是为了防止写错字符串，不是res那种
// action也需要通过actionCreator.js 统一公共部分策略模式,不要分散了。同时也便于做单元测试
store.dispatch({
    type: 'add',
    payload: 1,
})