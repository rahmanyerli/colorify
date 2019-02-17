import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
	state = {
		links: [
			{ name: "Home", to: "/home", class: "icon icon-right icon-home" },
			{ name: "Material Colors", to: "/material-colors", class: "icon icon-right icon-palette" },
			{ name: "Flat Colors", to: "/flat-colors", class: "icon icon-right icon-palette" },
			{ name: "Color Generator", to: "/color-generator", class: "icon icon-right icon-gear" },
			{ name: "Color Shades & Tints", to: "/color-shades-tints", class: "icon icon-right icon-shader" },
			{ name: "Color Mixer", to: "/color-mixer", class: "icon icon-right icon-mixer" },
			{ name: "Color Theory", to: "/color-theory", class: "icon icon-right icon-mixer" }]
	}

	render() {

		let links = this.state.links.map((link, i) =>
			<li key={i}><NavLink className={link.class} to={link.to}>{link.name}</NavLink></li>
		);

		return (
			<nav>
				<ul>
					<li className="logo"><h1>colorify.org</h1></li>
					{links}
				</ul>
			</nav>
		);
	}
}

export default Nav;
