import React      from 'react'

import ComponentA from '../../components/ComponentA'

class Hello extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<ComponentA
				title1="多属性-1"
				title2="多属性-2"
				title3="多属性-3"
				title4="多属性-4"
			>
			</ComponentA>
		)
	}
}

export default Hello
