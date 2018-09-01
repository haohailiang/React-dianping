import React from 'react'

class A extends React.Component {
	render() {
		return (
			<div>
				<p>A. {this.props.userinfo.userid}</p>
				{/* 初始化为({}).userid */}
				{/* 为了添加注释, 特意添加了一个包裹节点 */}
			</div>
		)
	}
}



export default A
