import React, { Component } from 'react';
import { Aside } from '../elements';

class SideMenu extends Component {

	componentDidMount() {
		const sideMenu = document.getElementById("side-menu");
		sideMenu.addEventListener("click", () => {
			const menuButton = document.getElementById("menu-button");
			menuButton.click();
		});
	}

	render() {
		return (
			<Aside id="side-menu">
				{this.props.children}
			</Aside>
		);
	}
}

export default SideMenu;
