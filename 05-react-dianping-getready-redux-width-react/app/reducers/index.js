import { combineReducers } from 'redux'

import userinfo            from './userinfo'

console.log( userinfo );

const rootReducer = combineReducers({
	userinfo
})

export default rootReducer
