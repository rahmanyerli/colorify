import React, { Component } from 'react';
import Color from '../color';
import { Label, Radio } from '../inputs';

class FlatColors extends Component {

	state = {
		colors: [
			{ name: 'Alizarin', value: '#D03E2F' },
			{ name: 'Amethyst', value: '#944EB1' },
			{ name: 'Belizehole', value: '#2E90D1' },
			{ name: 'Peterriver', value: '#2691D9' },
			{ name: 'Turquoise', value: '#1FE0BA' },
			{ name: 'Emerald', value: '#2FD073' },
			{ name: 'Sunflower', value: '#F1C40E' },
			{ name: 'Orange', value: '#F39A0C' },
			{ name: 'Carrot', value: '#E5791A' },
			{ name: 'Pumpkin', value: '#FF6600' },
			{ name: 'Clouds', value: '#6C8B93' },
			{ name: 'Silver', value: '#75828A' },
			{ name: 'Concrete', value: '#74898B' },
			{ name: 'Asbestos', value: '#788687' },
			{ name: 'Wetasphalt', value: '#5A80A5' }
		]
	}

	render() {

		const colors = this.getColors();

		return (
			<main>
				<br />
				<h1>Flat Colors</h1>
				<hr />
				<div className="settings">
					<section className="merge">
						<Radio name="type" id="radioHex" value="hex" checked onchange={Color.changeResultType} />
						<Label for="radioHex">hex</Label>
						<Radio name="type" id="radioRgb" value="rgb" onchange={Color.changeResultType} />
						<Label for="radioRgb">rgb</Label>
						<Radio name="type" id="radioHsl" value="hsl" onchange={Color.changeResultType} />
						<Label for="radioHsl">hsl</Label>
					</section>
				</div>
				<hr />
				<div id="colorPalette" className="color-palette">
					{colors}
				</div>
			</main>
		)
	}


	getColors = () => {
		const colors = this.state.colors.map((color) =>
			<div className="material" key={color.name}>
				<h2 className="text-center" style={{ color: color.value }}>{color.name}</h2>
				{this.getTones(color)}
				<br />
			</div>
		)
		return colors;
	}

	getTones = (color) => {
		const tones = Color.getTones(color.value);
		const cells = tones.map((tone) =>
			<div
				className="color"
				style={{ backgroundColor: tone.value }}
				key={tone.name}
				readOnly
				data-lightness={tone.name}
				onClick={Color.copyToClipboard}
			>
				{tone.value}
			</div>
		)
		return cells;
	}
}

export default FlatColors;