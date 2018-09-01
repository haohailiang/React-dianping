import React 	  from 'react'
import ComponentC from './ComponentC'

class ComponentB extends React.Component {
	render() {
		return (
			<ComponentC {...this.props}></ComponentC>
		)
	}
}

export default ComponentB
