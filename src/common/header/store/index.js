import reducer from './reducer';
import * as actionCreators from './actionCreators';
import * as constants from './constants';

// 每个module都应该这样设置一个入口文件。便于其他module的import
export { reducer, actionCreators, constants };