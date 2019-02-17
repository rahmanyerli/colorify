import React, { Component } from 'react';
import Color from '../color';
import { Label, Radio } from '../inputs';

class MaterialColors extends Component {

	state = {
		colors: [
			{
				name: 'Red',
				value: '#F44336',
				tones: [
					{ name: '50', value: '#FFEBEE' },
					{ name: '100', value: '#FFCDD2' },
					{ name: '200', value: '#EF9A9A' },
					{ name: '300', value: '#E57373' },
					{ name: '400', value: '#EF5350' },
					{ name: '500', value: '#F44336' },
					{ name: '600', value: '#E53935' },
					{ name: '700', value: '#D32F2F' },
					{ name: '800', value: '#C62828' },
					{ name: '900', value: '#B71C1C' }
				],
				atones: [
					{ name: 'A100', value: '#FF8A80' },
					{ name: 'A200', value: '#FF5252' },
					{ name: 'A400', value: '#FF1744' },
					{ name: 'A700', value: '#D50000' }
				]
			},
			{
				name: 'Pink',
				value: '#E91E63',
				tones: [
					{ name: '50', value: '#FCE4EC' },
					{ name: '100', value: '#F8BBD0' },
					{ name: '200', value: '#F48FB1' },
					{ name: '300', value: '#F06292' },
					{ name: '400', value: '#EC407A' },
					{ name: '500', value: '#E91E63' },
					{ name: '600', value: '#D81B60' },
					{ name: '700', value: '#C2185B' },
					{ name: '800', value: '#AD1457' },
					{ name: '900', value: '#880E4F' }
				],
				atones: [
					{ name: 'A100', value: '#FF80AB' },
					{ name: 'A200', value: '#FF4081' },
					{ name: 'A400', value: '#F50057' },
					{ name: 'A700', value: '#C51162' }
				]
			},
			{
				name: 'Purple',
				value: '#9C27B0',
				tones: [
					{ name: '50', value: '#F3E5F5' },
					{ name: '100', value: '#E1BEE7' },
					{ name: '200', value: '#CE93D8' },
					{ name: '300', value: '#BA68C8' },
					{ name: '400', value: '#AB47BC' },
					{ name: '500', value: '#9C27B0' },
					{ name: '600', value: '#8E24AA' },
					{ name: '700', value: '#7B1FA2' },
					{ name: '800', value: '#6A1B9A' },
					{ name: '900', value: '#4A148C' }
				],
				atones: [
					{ name: 'A100', value: '#EA80FC' },
					{ name: 'A200', value: '#E040FB' },
					{ name: 'A400', value: '#D500F9' },
					{ name: 'A700', value: '#AA00FF' }
				]
			},
			{
				name: 'Deep Purple',
				value: '#673AB7',
				tones: [
					{ name: '50', value: '#EDE7F6' },
					{ name: '100', value: '#D1C4E9' },
					{ name: '200', value: '#B39DDB' },
					{ name: '300', value: '#9575CD' },
					{ name: '400', value: '#7E57C2' },
					{ name: '500', value: '#673AB7' },
					{ name: '600', value: '#5E35B1' },
					{ name: '700', value: '#512DA8' },
					{ name: '800', value: '#4527A0' },
					{ name: '900', value: '#311B92' }
				],
				atones: [
					{ name: 'A100', value: '#B388FF' },
					{ name: 'A200', value: '#7C4DFF' },
					{ name: 'A400', value: '#651FFF' },
					{ name: 'A700', value: '#6200EA' }
				]
			},
			{
				name: 'Indigo',
				value: '#673AB7',
				tones: [
					{ name: '50', value: '#E8EAF6' },
					{ name: '100', value: '#C5CAE9' },
					{ name: '200', value: '#9FA8DA' },
					{ name: '300', value: '#7986CB' },
					{ name: '400', value: '#5C6BC0' },
					{ name: '500', value: '#3F51B5' },
					{ name: '600', value: '#3949AB' },
					{ name: '700', value: '#303F9F' },
					{ name: '800', value: '#283593' },
					{ name: '900', value: '#1A237E' }
				],
				atones: [
					{ name: 'A100', value: '#8C9EFF' },
					{ name: 'A200', value: '#536DFE' },
					{ name: 'A400', value: '#3D5AFE' },
					{ name: 'A700', value: '#304FFE' }
				]
			},
			{
				name: 'Blue',
				value: '#2196F3',
				tones: [
					{ name: '50', value: '#E3F2FD' },
					{ name: '100', value: '#BBDEFB' },
					{ name: '200', value: '#90CAF9' },
					{ name: '300', value: '#64B5F6' },
					{ name: '400', value: '#42A5F5' },
					{ name: '500', value: '#2196F3' },
					{ name: '600', value: '#1E88E5' },
					{ name: '700', value: '#1976D2' },
					{ name: '800', value: '#1565C0' },
					{ name: '900', value: '#0D47A1' }
				],
				atones: [
					{ name: 'A100', value: '#82B1FF' },
					{ name: 'A200', value: '#448AFF' },
					{ name: 'A400', value: '#2979FF' },
					{ name: 'A700', value: '#2962FF' }
				]
			},
			{
				name: 'Light Blue',
				value: '#03A9F4',
				tones: [
					{ name: '50', value: '#E1F5FE' },
					{ name: '100', value: '#B3E5FC' },
					{ name: '200', value: '#81D4FA' },
					{ name: '300', value: '#4FC3F7' },
					{ name: '400', value: '#29B6F6' },
					{ name: '500', value: '#03A9F4' },
					{ name: '600', value: '#039BE5' },
					{ name: '700', value: '#0288D1' },
					{ name: '800', value: '#0277BD' },
					{ name: '900', value: '#01579B' }
				],
				atones: [
					{ name: 'A100', value: '#80D8FF' },
					{ name: 'A200', value: '#40C4FF' },
					{ name: 'A400', value: '#00B0FF' },
					{ name: 'A700', value: '#0091EA' }
				]
			},
			{
				name: 'Cyan',
				value: '#00BCD4',
				tones: [
					{ name: '50', value: '#E0F7FA' },
					{ name: '100', value: '#B2EBF2' },
					{ name: '200', value: '#80DEEA' },
					{ name: '300', value: '#4DD0E1' },
					{ name: '400', value: '#26C6DA' },
					{ name: '500', value: '#00BCD4' },
					{ name: '600', value: '#00ACC1' },
					{ name: '700', value: '#0097A7' },
					{ name: '800', value: '#00838F' },
					{ name: '900', value: '#006064' }
				],
				atones: [
					{ name: 'A100', value: '#84FFFF' },
					{ name: 'A200', value: '#18FFFF' },
					{ name: 'A400', value: '#00E5FF' },
					{ name: 'A700', value: '#00B8D4' }
				]
			},
			{
				name: 'Teal',
				value: '#009688',
				tones: [
					{ name: '50', value: '#E0F2F1' },
					{ name: '100', value: '#B2DFDB' },
					{ name: '200', value: '#80CBC4' },
					{ name: '300', value: '#4DB6AC' },
					{ name: '400', value: '#26A69A' },
					{ name: '500', value: '#009688' },
					{ name: '600', value: '#00897B' },
					{ name: '700', value: '#00796B' },
					{ name: '800', value: '#00695C' },
					{ name: '900', value: '#004D40' }
				],
				atones: [
					{ name: 'A100', value: '#A7FFEB' },
					{ name: 'A200', value: '#64FFDA' },
					{ name: 'A400', value: '#1DE9B6' },
					{ name: 'A700', value: '#00BFA5' }
				]
			},
			{
				name: 'Green',
				value: '#4CAF50',
				tones: [
					{ name: '50', value: '#E8F5E9' },
					{ name: '100', value: '#C8E6C9' },
					{ name: '200', value: '#A5D6A7' },
					{ name: '300', value: '#81C784' },
					{ name: '400', value: '#66BB6A' },
					{ name: '500', value: '#4CAF50' },
					{ name: '600', value: '#43A047' },
					{ name: '700', value: '#388E3C' },
					{ name: '800', value: '#2E7D32' },
					{ name: '900', value: '#1B5E20' }
				],
				atones: [
					{ name: 'A100', value: '#B9F6CA' },
					{ name: 'A200', value: '#69F0AE' },
					{ name: 'A400', value: '#00E676' },
					{ name: 'A700', value: '#00C853' }
				]
			},
			{
				name: 'Light Green',
				value: '#8BC34A',
				tones: [
					{ name: '50', value: '#F1F8E9' },
					{ name: '100', value: '#DCEDC8' },
					{ name: '200', value: '#C5E1A5' },
					{ name: '300', value: '#AED581' },
					{ name: '400', value: '#9CCC65' },
					{ name: '500', value: '#8BC34A' },
					{ name: '600', value: '#7CB342' },
					{ name: '700', value: '#689F38' },
					{ name: '800', value: '#558B2F' },
					{ name: '900', value: '#33691E' }
				],
				atones: [
					{ name: 'A100', value: '#CCFF90' },
					{ name: 'A200', value: '#B2FF59' },
					{ name: 'A400', value: '#76FF03' },
					{ name: 'A700', value: '#64DD17' }
				]
			},
			{
				name: 'Lime',
				value: '#CDDC39',
				tones: [
					{ name: '50', value: '#F9FBE7' },
					{ name: '100', value: '#F0F4C3' },
					{ name: '200', value: '#E6EE9C' },
					{ name: '300', value: '#DCE775' },
					{ name: '400', value: '#D4E157' },
					{ name: '500', value: '#CDDC39' },
					{ name: '600', value: '#C0CA33' },
					{ name: '700', value: '#AFB42B' },
					{ name: '800', value: '#9E9D24' },
					{ name: '900', value: '#827717' }
				],
				atones: [
					{ name: 'A100', value: '#F4FF81' },
					{ name: 'A200', value: '#EEFF41' },
					{ name: 'A400', value: '#C6FF00' },
					{ name: 'A700', value: '#AEEA00' }
				]
			},
			{
				name: 'Yellow',
				value: '#FFEB3B',
				tones: [
					{ name: '50', value: '#FFFDE7' },
					{ name: '100', value: '#FFF9C4' },
					{ name: '200', value: '#FFF59D' },
					{ name: '300', value: '#FFF176' },
					{ name: '400', value: '#FFEE58' },
					{ name: '500', value: '#FFEB3B' },
					{ name: '600', value: '#FDD835' },
					{ name: '700', value: '#FBC02D' },
					{ name: '800', value: '#F9A825' },
					{ name: '900', value: '#F57F17' }
				],
				atones: [
					{ name: 'A100', value: '#FFFF8D' },
					{ name: 'A200', value: '#FFFF00' },
					{ name: 'A400', value: '#FFEA00' },
					{ name: 'A700', value: '#FFD600' }
				]
			},
			{
				name: 'Amber',
				value: '#FFC107',
				tones: [
					{ name: '50', value: '#FFF8E1' },
					{ name: '100', value: '#FFECB3' },
					{ name: '200', value: '#FFE082' },
					{ name: '300', value: '#FFD54F' },
					{ name: '400', value: '#FFCA28' },
					{ name: '500', value: '#FFC107' },
					{ name: '600', value: '#FFB300' },
					{ name: '700', value: '#FFA000' },
					{ name: '800', value: '#FF8F00' },
					{ name: '900', value: '#FF6F00' }
				],
				atones: [
					{ name: 'A100', value: '#FFE57F' },
					{ name: 'A200', value: '#FFD740' },
					{ name: 'A400', value: '#FFC400' },
					{ name: 'A700', value: '#FFAB00' }
				]
			},
			{
				name: 'Orange',
				value: '#FF9800',
				tones: [
					{ name: '50', value: '#FFF3E0' },
					{ name: '100', value: '#FFE0B2' },
					{ name: '200', value: '#FFCC80' },
					{ name: '300', value: '#FFB74D' },
					{ name: '400', value: '#FFA726' },
					{ name: '500', value: '#FF9800' },
					{ name: '600', value: '#FB8C00' },
					{ name: '700', value: '#F57C00' },
					{ name: '800', value: '#EF6C00' },
					{ name: '900', value: '#E65100' }
				],
				atones: [
					{ name: 'A100', value: '#FFD180' },
					{ name: 'A200', value: '#FFAB40' },
					{ name: 'A400', value: '#FF9100' },
					{ name: 'A700', value: '#FF6D00' }
				]
			},
			{
				name: 'Deep Orange',
				value: '#FF5722',
				tones: [
					{ name: '50', value: '#FBE9E7' },
					{ name: '100', value: '#FFCCBC' },
					{ name: '200', value: '#FFAB91' },
					{ name: '300', value: '#FF8A65' },
					{ name: '400', value: '#FF7043' },
					{ name: '500', value: '#FF5722' },
					{ name: '600', value: '#F4511E' },
					{ name: '700', value: '#E64A19' },
					{ name: '800', value: '#D84315' },
					{ name: '900', value: '#BF360C' }
				],
				atones: [
					{ name: 'A100', value: '#FF9E80' },
					{ name: 'A200', value: '#FF6E40' },
					{ name: 'A400', value: '#FF3D00' },
					{ name: 'A700', value: '#DD2C00' }
				]
			},
			{
				name: 'Brown',
				value: '#795548',
				tones: [
					{ name: '50', value: '#EFEBE9' },
					{ name: '100', value: '#D7CCC8' },
					{ name: '200', value: '#BCAAA4' },
					{ name: '300', value: '#A1887F' },
					{ name: '400', value: '#8D6E63' },
					{ name: '500', value: '#795548' },
					{ name: '600', value: '#6D4C41' },
					{ name: '700', value: '#5D4037' },
					{ name: '800', value: '#4E342E' },
					{ name: '900', value: '#3E2723' }
				]
			},
			{
				name: 'Grey',
				value: '#9E9E9E',
				tones: [
					{ name: '50', value: '#FAFAFA' },
					{ name: '100', value: '#F5F5F5' },
					{ name: '200', value: '#EEEEEE' },
					{ name: '300', value: '#E0E0E0' },
					{ name: '400', value: '#BDBDBD' },
					{ name: '500', value: '#9E9E9E' },
					{ name: '600', value: '#757575' },
					{ name: '700', value: '#616161' },
					{ name: '800', value: '#424242' },
					{ name: '900', value: '#212121' }
				]
			},
			{
				name: 'Blue Grey',
				value: '#607D8B',
				tones: [
					{ name: '50', value: '#ECEFF1' },
					{ name: '100', value: '#CFD8DC' },
					{ name: '200', value: '#B0BEC5' },
					{ name: '300', value: '#90A4AE' },
					{ name: '400', value: '#78909C' },
					{ name: '500', value: '#607D8B' },
					{ name: '600', value: '#546E7A' },
					{ name: '700', value: '#455A64' },
					{ name: '800', value: '#37474F' },
					{ name: '900', value: '#263238' }
				]
			}
		]
	}

	render() {

		const colors = this.getColors();

		return (
			<main>
				<br />
				<h1>Material Colors</h1>
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
				{this.getAtones(color)}
				<br />
			</div>
		)
		return colors;
	}

	getTones = (color) => {
		const tones = color.tones.reverse().map((tone) =>
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
		return tones;
	}

	getAtones = (color) => {
		if (!color.atones) {
			return null;
		}
		const tones = color.atones.reverse().map((tone) =>
			<div
				className="color material-color"
				style={{ backgroundColor: tone.value }}
				key={tone.name}
				readOnly
				data-lightness={tone.name}
				onClick={Color.copyToClipboard}
			>
				{tone.value}
			</div>
		)
		return tones;
	}
}

export default MaterialColors;