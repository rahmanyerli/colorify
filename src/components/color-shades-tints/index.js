import React, { Component } from 'react';
import { Main, Section, Div, Span } from '../elements';
import { Label, Text, Radio, Button } from '../inputs';
import Color from '../color';

class ColorShadesTints extends Component {

	componentDidMount() {
		Color.createPalette();
	}

	render() {
		return (
			<Main>
				<br />
				<h1>Color Shades &#38; Tints</h1>
				<hr />
				<Div class="settings">
					<Section class="merge">
						<Radio name="type" id="radioHex" value="hex" checked onchange={Color.changeResultType} />
						<Label for="radioHex">hex </Label>
						<Radio name="type" id="radioRgb" value="rgb" onchange={Color.changeResultType} />
						<Label for="radioRgb">rgb </Label>
						<Radio name="type" id="radioHsl" value="hsl" onchange={Color.changeResultType} />
						<Label for="radioHsl">hsl </Label>
					</Section>
					<Section>
						<Text id="colorText" onchange={Color.shadeAll} placeholder="#FF0000  rgb(255, 0, 0)  hsl(0, 100%, 50%)" />
					</Section>
					<Section>
						<Button onclick={Color.createPalette}>
							<Span id="iconGear" class="icon icon-gear">&nbsp;</Span>Randomize
						</Button>
					</Section>
				</Div>
				<hr />
				<Div id="colorPalette" class="color-palette">
				</Div>
			</Main>
		);
	}
}

export default ColorShadesTints;