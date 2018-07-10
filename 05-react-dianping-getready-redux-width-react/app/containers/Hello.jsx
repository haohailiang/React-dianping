import React                  from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userinfoActions   from '../actions/userinfo'
import A                      from '../components/A'
import B                      from '../components/B'
import C                      from '../components/C'

class Hello extends React.Component {
	render() {
		console.log( "a:3" );
		return (
			<div>
				<p>hello world</p>
				<hr/>
				<A userinfo={this.props.userinfo}/>
				<hr/>
				<B userinfo={this.props.userinfo}/>
				<hr/>
				<C actions={this.props.userinfoActions}/>
			</div>
		)
	}
	componentDidMount() {
		console.log( "b:4" );
		// 模拟登陆
		this.props.userinfoActions.login({
			userid: 'abc',
			city: 'beijing'
		})
	}
}

function mapStateToProps(state) {
	console.log( "c:1", state );
	return {
		// 刚开始空对象{}
		userinfo: state.userinfo
	}
}

function mapDispatchToProps(dispatch) {
	console.log( "d:2" );
	return {
		userinfoActions: bindActionCreators(userinfoActions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Hello)
