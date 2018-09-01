import React 	  from 'react'
import ComponentB from './ComponentB'

class ComponentA extends React.Component {
	render() {
		return (
			<ComponentB {...this.props}></ComponentB>
		)
	}
}

export default ComponentA
