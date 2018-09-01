import * as actionTypes from '../constants/userinfo'

const initialState = {}

// 定义规则
export default function userinfo(state = initialState, action) {
    // 这里会有一些初始化action,但都不会命中
	console.log( action );
	switch (action.type) {
		// 登录
		case actionTypes.USERINFO_LOGIN:
			return action.data
		// 修改城市
		case actionTypes.UPDATE_CITYNAME:
			return action.data
		default:
			return state
	}
}

// 初始化的时候没有触发任何action, 状态就是initialState
