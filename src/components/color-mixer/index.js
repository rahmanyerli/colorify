import React, { Component } from 'react';
import { Label, Radio, Text } from '../inputs';
import Color from '../color';
import DragDrop from '../dragdrop';

class ColorMixer extends Component {

	componentDidMount() {
		DragDrop.init();
	}

	render() {
		return (
			<main>
				<br />
				<h1>Color Mixer</h1>
				<hr />
				<div className="settings">
					<section className="merge">
						<Radio name="type" id="radioHex" value="hex" checked onchange={Color.changeResultType} />
						<Label for="radioHex">hex </Label>
						<Radio name="type" id="radioRgb" value="rgb" onchange={Color.changeResultType} />
						<Label for="radioRgb">rgb </Label>
						<Radio name="type" id="radioHsl" value="hsl" onchange={Color.changeResultType} />
						<Label for="radioHsl">hsl </Label>
					</section>
					<section className="grid-cols gap-half" dropzone="copy">
						<div className="red span-4" draggable="true" data-color="255,0,0">
							drag
						</div>
						<div className="green span-4" draggable="true" data-color="0,255,0">
							drag
						</div>
						<div className="blue span-4" draggable="true" data-color="0,0,255">
							drag
						</div>
					</section>
					<section>
						<Text name="colorText" id="colorText" readonly />
					</section>
				</div>
				<hr />
				<div id="colorMix" className="grid-cols gap-half bg-1" dropzone="move">
					<em className="span-12 text-center color-6">drop zone</em>
				</div>
				<hr />
				<div id="colorPalette" className="color-palette">
				</div>
			</main>
		);
	}
}

export default ColorMixer;