import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
	type: constants.CHANGE_LIST,
	// data会在reducer中进行替换，所以也需要转换成im
	data: fromJS(data),
	totalPage: Math.ceil(data.length / 10)
});

// TODO: 下面这些action其实可以用柯里化做统一处理
export const searchFocus = () => ({
	type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
	type: constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
	type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
	type: constants.MOUSE_LEAVE
});

export const changePage = (page) => ({
	type: constants.CHANGE_PAGE,
	page
});

// 通过redux-thunk来做异步action
export const getList = () => {
	return (dispatch) => {
		axios.get('/api/headerList.json').then((res) => {
			const data = res.data;
			// TODO: 这里应该做一个dataFormat，防止服务端字段改变
			dispatch(changeList(data.data));
		}).catch(() => {
			console.log('error');
		})
	}
};