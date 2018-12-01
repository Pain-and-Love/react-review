export default (state = '', action) => {
    switch(action.type) {
        // 经过一顿处理之后， 最终return出去的值,就是新的state
        case 'USER_FETCH_REQUESTED1': return action.payload;
    }
}