import React 	 from 'react'

class ComponentC extends React.Component {
	render() {
		return (
			<div>
				<p>{this.props.title1}</p>
				<p>{this.props.title2}</p>
				<p>{this.props.title3}</p>
				<p>{this.props.title4}</p>
			</div>
		)
	}
}

export default ComponentC
