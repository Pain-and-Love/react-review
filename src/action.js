import actionTypes from './constant.js';

export function getAges(age) {
    console.log(age,'age') // 3
    return {
        type: actionTypes.GET_AGE,
        payload: age
    }
}