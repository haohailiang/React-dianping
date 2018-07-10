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
		actions.login({
			userid : '123',
			city   : 'nanjing'
		})
	}
}

export default C
