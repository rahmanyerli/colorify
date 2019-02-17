import React, { Component } from 'react';
import { CheckBox } from '../inputs';

class MenuButton extends Component {

	componentDidMount() {
		this.toggleMenuButton();
	}

	render() {
		return (
			<CheckBox id="menu-button" class="icon icon-menu" />
		);
	}

	//Show or hide the menu button by window scroll position
	toggleMenuButton = () => {
		// Initial state
		var scrollPos = 0;
		// adding scroll event
		window.addEventListener('scroll', function () {
			// detects new state and compares it with the new one
			let buttonMenu = document.getElementById("menu-button");
			if ((document.body.getBoundingClientRect()).top < scrollPos) {
				setTimeout(() => {
					buttonMenu.classList.remove("scale-1");
					buttonMenu.classList.add("scale-0");
				}, 100);
			}
			else {
				setTimeout(() => {
					buttonMenu.classList.remove("scale-0");
					buttonMenu.classList.add("scale-1");
				}, 100);
			}
			// saves the new position for iteration.
			scrollPos = (document.body.getBoundingClientRect()).top;
		});
	}
}

export default MenuButton;