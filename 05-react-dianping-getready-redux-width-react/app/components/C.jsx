import React from 'react'

class C extends React.Component {
	render() {
		return (
			<div>
				<button onClick={this.changeUserInfo.bind(this)}>C. 修改</button>
			</div>
		)
	}
	changeUserInfo() {
		const actions = this.props.actions

		// 调用方法触发规则
		actions.updateCityName({
			userid : '123',
			city   : 'nanjing'
		})
        // 调用 action 结合中的 updateCityName 方法,并把数据传输过去
        // 触发 action 中的 UPDATE_CITYNAME action, 这个完整的 action 是 {
		// 	type: actionTypes.UPDATE_CITYNAME,
		// 	data
		// }
        // 这个 action 带数据, 数据就是穿进去的 {userid : '123',	city   : 'nanjing'}
         // reducer 订阅到这个action
         // 返回这个数据 action.data {userid : '123',	city   : 'nanjing'}
         // redux state属性 userinfo 变成 {userid : '123',	city   : 'nanjing'}
         // 依靠 redux state 属性 userinfo 都会改变
	}
}

export default C
