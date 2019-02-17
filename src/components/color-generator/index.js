import React, { Component } from 'react';
import { Main, Section, Div, Span, Hr } from '../elements';
import { Label, Radio, Button } from '../inputs';
import Color from '../color';

class ColorGenerator extends Component {

	componentDidMount() {
		Color.generateAll();
	}

	render() {
		return (
			<Main>
				<br />
				<h1>Color Generator</h1>
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
					<Section class="merge">
						<Radio name="tone" id="radioNormal" value="normal" checked onchange={Color.generateAll} />
						<Label for="radioNormal">Normal</Label>
						<Radio name="tone" id="radioMatt" value="matt" onchange={Color.generateAll} />
						<Label for="radioMatt">Matt</Label>
						<Radio name="tone" id="radioPastel" value="pastel" onchange={Color.generateAll} />
						<Label for="radioPastel">Pastel</Label>
					</Section>
					<Section>
						<Button onclick={Color.generateAll}>
							<Span id="iconGear" class="icon icon-gear">&nbsp;</Span>Randomize
							</Button>
					</Section>
				</Div>
				<Hr />
				<Div id="colorPalette" class="color-palette">
				</Div>
			</Main>
		);
	}
}

export default ColorGenerator;