import { combineReducers } from 'redux'

import userinfo            from './userinfo'

// 合并业务规则
const rootReducer = combineReducers({
	userinfo
})

// userinfo这种写法是ES6的语法
// store里边保存的的state属性就是这个userinfo
// store里边保存的值为userinfo reducer返回的state {}  // 初始化

export default rootReducer

// 规则集合
