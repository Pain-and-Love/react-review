import * as constants from './constants';
import { fromJS } from 'immutable';

// 转换为immutable对象。 不会犯修改错误了。
// 但是在Header组件中使用的时候，由于state.header已经被转换了，所以也不能直接state.header.list使用了。 state.header.get('list')
const defaultState = fromJS({
	focused: false,
	mouseIn: false,
	// 这里注意list: [], 中的[]也被fromJS做了转换，所以后面改变list的值，也只能是set('list', IMobj)
	list: [],
	page: 1,
	totalPage: 1
});

// reducer仅仅只负责"返回新的数据"，不负责修改逻辑。
// 所以这里尽量需要保持简洁
export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.SEARCH_FOCUS:
			// 所以这里也必须返回一个新的immutable对象。 即state.set()的返回值。
			return state.set('focused', true);
		case constants.SEARCH_BLUR:
			return state.set('focused', false);
		case constants.CHANGE_LIST:
			// 保证返回的是一个im对象,这里不能用set('list', list)，因为list:[]中的[]也是im ，而action.data中的list只是一个普通对象
			// merge相当于多次调用get
			return state.merge({
				list: action.data,
				totalPage: action.totalPage
			});
		case constants.MOUSE_ENTER:
			return state.set('mouseIn', true);
		case constants.MOUSE_LEAVE:
			return state.set('mouseIn', false);
		case constants.CHANGE_PAGE:
			return state.set('page', action.page);
		default:
			return state;
	}
}