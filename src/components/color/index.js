class Color {

	static changeResultType = () => {
		const resultType = document.querySelector("input[type=radio][name=type]:checked").value;
		const colorPalette = document.getElementById("colorPalette");
		const colorCells = colorPalette.querySelectorAll("div.color");
		if (colorCells) {
			for (const colorCell of colorCells) {
				const color = colorCell.textContent;
				if (Color.isHex(color)) {
					let rgb;
					switch (resultType) {
						case "rgb":
							rgb = Color.hexToRgb(color);
							colorCell.textContent = Color.toRgbString(rgb.r, rgb.g, rgb.b);
							break;
						case "hsl":
							rgb = Color.hexToRgb(color);
							const hsl = Color.rgbToHsl(rgb.r, rgb.g, rgb.b);
							colorCell.textContent = Color.toHslString(hsl.h, hsl.s, hsl.l);
							break;
						default:
							break;
					}
				}
				else if (Color.isRgb(color)) {
					const rgb = Color.toRgbObject(color);
					switch (resultType) {
						case "hex":
							const hex = Color.rgbToHex(rgb.r, rgb.g, rgb.b);
							colorCell.textContent = hex;
							break;
						case "hsl":
							const hsl = Color.rgbToHsl(rgb.r, rgb.g, rgb.b);
							colorCell.textContent = Color.toHslString(hsl.h, hsl.s, hsl.l);
							break;
						default:
							break;
					}
				}
				else if (Color.isHsl(color)) {
					const hsl = Color.toHslObject(color);
					let rgb;
					switch (resultType) {
						case "hex":
							rgb = Color.hslToRgb(hsl.h, hsl.s, hsl.l);
							const hex = Color.rgbToHex(rgb.r, rgb.g, rgb.b);
							colorCell.textContent = hex;
							break;
						case "rgb":
							rgb = Color.hslToRgb(hsl.h, hsl.s, hsl.l);
							colorCell.textContent = Color.toRgbString(rgb.r, rgb.g, rgb.b);
							break;
						default:
							break;
					}
				}
			}
		}
	}

	static createColorCell = () => {
		const colorCell = document.createElement("div");
		colorCell.classList.add("color");
		colorCell.addEventListener("click", Color.copyToClipboard);
		return colorCell;
	}

	static generateAll = () => {
		const iconGear = document.getElementById("iconGear");
		iconGear.classList.add("rotate");
		const colorPalette = document.getElementById("colorPalette");
		const colorTone = document.querySelector("input[type=radio][name=tone]:checked").value;
		const resultType = document.querySelector("input[type=radio][name=type]:checked").value;
		colorPalette.innerHTML = "";
		for (let i = 0; i < 20; i++) {
			const colorCell = Color.createColorCell();
			const color = Color.generate(colorTone, resultType);
			colorCell.style.backgroundColor = color;
			colorCell.textContent = color;
			colorPalette.appendChild(colorCell);
		}
		setTimeout(() => {
			iconGear.classList.remove("rotate");
		}, 600);
	}

	static createPalette = () => {
		const colorText = document.getElementById("colorText");
		colorText.value = "";
		const iconGear = document.getElementById("iconGear");
		iconGear.classList.add("rotate");
		const colorPalette = document.getElementById("colorPalette");
		colorPalette.innerHTML = "";
		const r = Color.randomColor(0, 255);
		const g = Color.randomColor(0, 255);
		const b = Color.randomColor(0, 255);
		const resultType = document.querySelector("input[type=radio][name=type]:checked").value;

		for (let i = 1; i < 21; i++) {
			const colorCell = document.createElement("div");
			colorCell.classList.add("color");
			const hsl = Color.rgbToHsl(r, g, b);
			let l = i * 0.05;
			if (i === 20) {
				l = l - 0.025;
			}
			const rgb = Color.hslToRgb(hsl.h, hsl.s, l);
			let color;
			switch (resultType) {
				case "hex":
					color = Color.rgbToHex(rgb.r, rgb.g, rgb.b);
					break;
				case "rgb":
					color = Color.toRgbString(rgb.r, rgb.g, rgb.b);
					break;
				case "hsl":
					color = Color.toHslString(hsl.h, hsl.s, l);
					break;
				default:
					break;
			}
			colorCell.style.backgroundColor = color;
			colorCell.textContent = color;
			colorCell.addEventListener("click", Color.copyToClipboard);
			colorCell.setAttribute("data-lightness", Math.round(1000 - (l * 1000)));
			colorPalette.appendChild(colorCell);
		}
		setTimeout(() => {
			iconGear.classList.remove("rotate");
		}, 600);
	}

	static generate = (colorTone, resultType) => {
		let min = 0;
		let max = 255;

		switch (colorTone) {
			case "matt":
				min = 51;
				max = 204;
				break;
			case "pastel":
				min = 153
				max = 255;
				break;
			default:
				break;
		}
		const r = Color.randomColor(min, max);
		const g = Color.randomColor(min, max);
		const b = Color.randomColor(min, max);
		let color;
		switch (resultType) {
			case "hex":
				color = Color.rgbToHex(r, g, b);
				break;
			case "rgb":
				color = Color.toRgbString(r, g, b);
				break;
			case "hsl":
				const hsl = Color.rgbToHsl(r, g, b);
				color = Color.toHslString(hsl.h, hsl.s, hsl.l);
				break;
			default:
				break;
		}
		return color;
	}

	static shadeAll = () => {
		const colorPalette = document.getElementById("colorPalette");
		colorPalette.innerHTML = "";
		const resultType = document.querySelector("input[type=radio]:checked").value;
		const color = document.getElementById("colorText").value;
		let rgb;
		let hsl = { h: 0, s: 0, l: 0 };
		if (Color.isHex(color)) {
			rgb = Color.hexToRgb(color);
			hsl = Color.rgbToHsl(rgb.r, rgb.g, rgb.b);
		}
		else if (Color.isRgb(color)) {
			rgb = Color.toRgbObject(color);
			hsl = Color.rgbToHsl(rgb.r, rgb.g, rgb.b);
		}
		else if (Color.isHsl(color)) {
			const hslArray = color.substring(4, color.length - 1).replace(/\s/g, "").split(",");
			hsl.h = hslArray[0];
			hsl.s = parseFloat(hslArray[1].replace(/%/g, "")) / 100;
			hsl.l = parseFloat(hslArray[2].replace(/%/g, "")) / 100;
		}
		else {
			return false;
		}
		for (let i = 1; i < 21; i++) {
			let l = i / 20;
			if (i === 20) {

				l = l - 0.025;
			}
			const colorCell = Color.shade(hsl, l, resultType);
			colorCell.setAttribute("data-lightness", Math.round(1000 - (l * 1000)));
			colorPalette.appendChild(colorCell);
			// if (hsl.l > l && hsl.l < l + 0.049) {
			// 	const originalColor = Color.shade(hsl, hsl.l, resultType);
			// 	originalColor.style.animation = "wiggle 1s ease";
			// 	originalColor.setAttribute("data-lightness", Math.round(1000 - (l * 1000)));
			// 	colorPalette.appendChild(originalColor);
			// 	Color.setTempText(originalColor, 2000, "your tone is here!");
			// }
			// else if (Math.round(hsl.l * 100) === Math.round(l * 100)) {
			// 	colorCell.style.animation = "wiggle 1s ease";
			// 	Color.setTempText(colorCell, 2000, "your tone is here!");
			// }
		}
	}


	static shade = (hsl, l, resultType) => {
		const colorCell = Color.createColorCell();
		const rgb = Color.hslToRgb(hsl.h, hsl.s, l);
		const hex = Color.rgbToHex(rgb.r, rgb.g, rgb.b);
		colorCell.style.backgroundColor = hex;

		switch (resultType) {
			case "hex":
				colorCell.textContent = hex;
				break;
			case "rgb":
				colorCell.textContent = Color.toRgbString(rgb.r, rgb.g, rgb.b);
				break;
			case "hsl":
				colorCell.textContent = Color.toHslString(hsl.h, hsl.s, l);
				break;
			default:
				break;
		}
		return colorCell;
	}

	static getTones = (color) => {
		const tones = [];
		const resultType = "hex";
		let rgb;
		let hsl = { h: 0, s: 0, l: 0 };
		if (Color.isHex(color)) {
			rgb = Color.hexToRgb(color);
			hsl = Color.rgbToHsl(rgb.r, rgb.g, rgb.b);
		}
		else if (Color.isRgb(color)) {
			rgb = Color.toRgbObject(color);
			hsl = Color.rgbToHsl(rgb.r, rgb.g, rgb.b);
		}
		else if (Color.isHsl(color)) {
			const hslArray = color.substring(4, color.length - 1).replace(/\s/g, "").split(",");
			hsl.h = hslArray[0];
			hsl.s = parseFloat(hslArray[1].replace(/%/g, "")) / 100;
			hsl.l = parseFloat(hslArray[2].replace(/%/g, "")) / 100;
		}
		else {
			return false;
		}
		for (let i = 1; i < 20; i++) {
			let l = i / 20;
			const tone = Color.getTone(hsl, l, resultType);
			tones.push(tone);
		}
		return tones;
	}

	static getTone = (hsl, l, resultType) => {
		const rgb = Color.hslToRgb(hsl.h, hsl.s, l);
		const hex = Color.rgbToHex(rgb.r, rgb.g, rgb.b);

		let tone = { name: "", value: "" };
		tone.name = Math.round(1000 - (l * 1000));

		switch (resultType) {
			case "hex":
				tone.value = hex;
				break;
			case "rgb":
				tone.value = Color.toRgbString(rgb.r, rgb.g, rgb.b);
				break;
			case "hsl":
				tone.value = Color.toHslString(hsl.h, hsl.s, l);
				break;
			default:
				break;
		}
		return tone;
	}

	static mix = (colors) => {
		let r = 0;
		let g = 0;
		let b = 0;
		if (colors && colors.length > 0) {
			for (const color of colors) {
				const rgb = color.getAttribute("data-color").split(",");
				r += parseInt(rgb[0]);
				g += parseInt(rgb[1]);
				b += parseInt(rgb[2]);
			}
			r = Math.round(r / colors.length);
			g = Math.round(g / colors.length);
			b = Math.round(b / colors.length);
		}
		return { r: r, g: g, b: b };
	}

	static mixall = () => {
		const colorMix = document.getElementById("colorMix");
		const colors = colorMix.querySelectorAll("[draggable]");
		const colorArray = [];
		if (colors && colors.length > 0) {
			for (const color of colors) {
				colorArray.push(color.getAttribute("data-color"));
			}
			const mixed = Color.mix(colors);
			const resultType = document.querySelector("input[type=radio][name=type]:checked").value;
			let color;
			switch (resultType) {
				case "hex":
					color = Color.rgbToHex(mixed.r, mixed.g, mixed.b);
					break;
				case "rgb":
					color = Color.toRgbString(mixed.r, mixed.g, mixed.b);
					break;
				case "hsl":
					const hsl = Color.rgbToHsl(mixed.r, mixed.g, mixed.b);
					color = Color.toHslString(hsl.h, hsl.s, hsl.l);
					break;
				default:
					break;
			}
			const colorText = document.getElementById("colorText");
			colorText.value = color;
			Color.shadeAll();
		}
		else {
			const em = document.createElement("em");
			em.textContent = "drop zone";
			em.className = "span-12 text-center color-6";
			colorMix.appendChild(em);
		}
	}

	static randomColor = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	static toHex = (c) => {
		const hex = parseInt(c).toString(16).toUpperCase();
		return hex.length === 1 ? "0" + hex : hex;
	}

	static rgbToHex = (r, g, b) => {
		return "#" + Color.toHex(r) + Color.toHex(g) + Color.toHex(b);
	}

	static hexToRgb = (hex) => {
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		} : null;
	}

	static copyToClipboard = (event) => {
		const element = event.target;
		const el = document.createElement("textarea");
		el.value = element.textContent;
		el.setAttribute('readonly', '');
		document.body.appendChild(el);
		el.select();
		document.execCommand("copy");
		const text = element.textContent;
		element.textContent = "copied!";
		el.remove();
		setTimeout(() => {
			element.textContent = text;
		}, 500);
	}

	static hslToRgb = (hue, sat, light) => {
		let t1, t2, r, g, b;
		hue = hue / 60;
		if (light <= 0.5) {
			t2 = light * (sat + 1);
		} else {
			t2 = light + sat - (light * sat);
		}
		t1 = light * 2 - t2;
		r = parseFloat(Color.hueToRgb(t1, t2, hue + 2) * 255).toFixed();
		g = parseFloat(Color.hueToRgb(t1, t2, hue) * 255).toFixed();
		b = parseFloat(Color.hueToRgb(t1, t2, hue - 2) * 255).toFixed();
		return { r: r, g: g, b: b };
	}

	static hueToRgb = (t1, t2, h) => {
		if (h < 0) h += 6;
		if (h >= 6) h -= 6;
		if (h < 1) return (t2 - t1) * h + t1;
		else if (h < 3) return t2;
		else if (h < 4) return (t2 - t1) * (4 - h) + t1;
		else return t1;
	}

	static rgbToHsl = (r, g, b) => {
		let min, max, i, l, s, maxcolor, h, rgb = [];
		rgb[0] = r / 255;
		rgb[1] = g / 255;
		rgb[2] = b / 255;
		min = rgb[0];
		max = rgb[0];
		maxcolor = 0;
		for (i = 0; i < rgb.length - 1; i++) {
			if (rgb[i + 1] <= min) { min = rgb[i + 1]; }
			if (rgb[i + 1] >= max) { max = rgb[i + 1]; maxcolor = i + 1; }
		}
		if (maxcolor === 0) {
			h = (rgb[1] - rgb[2]) / (max - min);
		}
		if (maxcolor === 1) {
			h = 2 + (rgb[2] - rgb[0]) / (max - min);
		}
		if (maxcolor === 2) {
			h = 4 + (rgb[0] - rgb[1]) / (max - min);
		}
		if (isNaN(h)) { h = 0; }
		h = h * 60;
		if (h < 0) { h = h + 360; }
		l = (min + max) / 2;
		if (min === max) {
			s = 0;
		} else {
			if (l < 0.5) {
				s = (max - min) / (max + min);
			} else {
				s = (max - min) / (2 - max - min);
			}
		}
		return { h: h, s: s, l: l };
	}

	static roundDown = (num, precision) => {
		precision = Math.pow(10, precision); // power
		return parseFloat(Math.round(num * precision) / precision);
	}

	static roundUp = (num, precision) => {
		precision = Math.pow(10, precision); // power
		return parseFloat(Math.ceil(num * precision) / precision);
	}

	static isHex = (value) => {
		const pattern = /^#(?:[0-9a-f]{3}){2}$/i;
		return pattern.test(value);
	}

	static isRgb = (value) => {
		const pattern = /([R][G][B][A]?[(]\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])(\s*,\s*((0\.[0-9]{1})|(1\.0)|(1)))?[)])/i;
		return pattern.test(value);
	}

	static isHsl = (value) => {
		const pattern = /hsl\(\s*(\d+)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%)\)/i;
		return pattern.test(value);
	}

	static toHslString = (h, s, l) => {
		return "hsl(" + Color.roundUp(h, 0) + ", " + parseInt(Color.roundDown(s, 2) * 100) + "%, " + parseInt(Color.roundDown(l, 2) * 100) + "%)";
	}

	static toRgbString = (r, g, b) => {
		return "rgb(" + r + ", " + g + ", " + b + ")";
	}

	static toRgbObject = (rgbText) => {
		if (Color.isRgb(rgbText)) {
			const rgbArray = rgbText.substring(4, rgbText.length - 1).replace(/\s/g, "").split(",");
			return { r: rgbArray[0], g: rgbArray[1], b: rgbArray[2] };
		}
	}

	static toHslObject = (hslText) => {
		if (Color.isHsl(hslText)) {
			const hslArray = hslText.substring(4, hslText.length - 1).replace(/\s/g, "").split(",");
			return { h: parseFloat(hslArray[0]), s: parseFloat(hslArray[1].replace(/%/g, "")) / 100, l: parseFloat(hslArray[2].replace(/%/g, "")) / 100 };
		}
	}

	static isDark = (rgb) => {
		if (parseInt(rgb.r) + parseInt(rgb.g) + parseInt(rgb.b) < 384) {
			return true;
		} else {
			return false;
		}
	}

	static setTempText = (element, delay, text) => {
		const original = element.textContent;
		element.textContent = text;
		setTimeout(() => {
			element.textContent = original;
		}, delay);
	}
}

export default Color;