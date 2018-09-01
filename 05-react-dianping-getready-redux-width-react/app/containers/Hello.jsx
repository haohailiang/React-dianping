import React                  from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userinfoActions   from '../actions/userinfo'
import A                      from '../components/A'
import B                      from '../components/B'
import C                      from '../components/C'

class Hello extends React.Component {
	render() {
		// console.log( "a:3" );
		return (
			<div>
				<p>hello world</p>
				<hr/>
				<A userinfo={this.props.userinfo}/> {/* 初始化为{} */}
				<hr/>
				<B userinfo={this.props.userinfo}/> {/* 初始化为{} */}
				<hr/>
				<C actions={this.props.userinfoActions}/>
			</div>
		)
	}
    // 假设没有这里模拟的动作
	componentDidMount() {
		// console.log( "b:4" );
		// 模拟登陆
		this.props.userinfoActions.login({
			userid: 'abc',
			city: 'beijing'
		})
	}

	// 调用 action 结合中的 login 方法,并把数据传输过去
	// 触发 action 中的 USERINFO_LOGIN action, 这个完整的 action 是 {
	// 	type: actionTypes.USERINFO_LOGIN,
	// 	data
	// }
	// 这个 action 带数据, 数据就是穿进去的 {userid : 'abc',	city   : 'beijing'}
	 // reducer 订阅到这个action
	 // 返回这个数据 action.data {userid : 'abc',	city   : 'beijing'}
	 // redux state属性 userinfo 变成 {userid : 'abc',	city   : 'beijing'}
	 // 依靠 redux state 属性 userinfo 都会改变
}

// 把redux中的state属性映射到本组件的prop上
function mapStateToProps(state) {
	// console.log( "c:1", state );
	return {
		// 刚开始空对象{}
		userinfo: state.userinfo
        // 前边的 userinfo 为 本组件要用到的属性
        // state.userinfo 为redux中的state 初始化为 {}
	}
}

// 这里的state是recuder中可以查看到[所有的]
// store中的getState也可以查看到所有的state

// 把redux中的dispatch派发映射到本组件的prop上
function mapDispatchToProps(dispatch) {
	// console.log( "d:2" );
	return {
		userinfoActions: bindActionCreators(userinfoActions, dispatch)
		// 前边的 userinfoActions 为 本组件要用到的属性
        // 后边的 userinfoActions 为 action
        // 后边的 userinfoActions 代表了 action 中的集合
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Hello)
