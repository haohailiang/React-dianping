import React from 'react'

class B extends React.Component {
	render() {
		return (
			<div>
				<p>B. {this.props.userinfo.city}</p>
				{/* 初始化为({}).city */}
				{/* 为了添加注释, 特意添加了一个包裹节点 */}
			</div>

		)
	}
}

export default B
