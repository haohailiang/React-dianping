import { combineReducers } from 'redux'

import userinfo            from './userinfo'

console.log( userinfo );

// 合并业务规则
const rootReducer = combineReducers({
	userinfo
})

export default rootReducer
