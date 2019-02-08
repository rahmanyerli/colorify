import React, { Component } from 'react';

class Aside extends Component {

	render() {
		return (
			<aside>
				{this.props.children}
			</aside>
		);
	}
}

export default Aside;
