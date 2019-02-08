import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
	state = {
		links: [
			{ name: "Home", to: "/home", class: "icon icon-right icon-home" },
			{ name: "Color Generator", to: "/color-generator", class: "icon icon-right icon-gear" },
			{ name: "Color Palettes", to: "/color-palettes", class: "icon icon-right icon-palette" },
			{ name: "Color Shader", to: "/color-shader" },
			{ name: "Color Mixer", to: "/color-mixer" },
			{ name: "Material Colors", to: "#" }]
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
