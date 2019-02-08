class Color {

	static changeResultType = () => {
		let resultType = document.querySelector("input[type=radio][name=type]:checked").value;
		let colorPalette = document.getElementById("colorPalette");
		let colorCells = colorPalette.querySelectorAll("textarea");
		if (colorCells) {
			for (const colorCell of colorCells) {
				let color = colorCell.value;
				if (Color.isHex(color)) {
					let rgb;
					switch (resultType) {
						case "rgb":
							rgb = Color.hexToRgb(color);
							colorCell.value = Color.toRgbString(rgb.r, rgb.g, rgb.b);
							break;
						case "hsl":
							rgb = Color.hexToRgb(color);
							let hsl = Color.rgbToHsl(rgb.r, rgb.g, rgb.b);
							colorCell.value = Color.toHslString(hsl.h, hsl.s, hsl.l);
							break;
						default:
							break;
					}
				}
				else if (Color.isRgb(color)) {
					let rgb = Color.toRgbObject(color);
					switch (resultType) {
						case "hex":
							let hex = Color.rgbToHex(rgb.r, rgb.g, rgb.b);
							colorCell.value = hex;
							break;
						case "hsl":
							let hsl = Color.rgbToHsl(rgb.r, rgb.g, rgb.b);
							colorCell.value = Color.toHslString(hsl.h, hsl.s, hsl.l);
							break;
						default:
							break;
					}
				}
				else if (Color.isHsl(color)) {
					let hsl = Color.toHslObject(color);
					let rgb;
					switch (resultType) {
						case "hex":
							rgb = Color.hslToRgb(hsl.h, hsl.s, hsl.l);
							let hex = Color.rgbToHex(rgb.r, rgb.g, rgb.b);
							colorCell.value = hex;
							break;
						case "rgb":
							rgb = Color.hslToRgb(hsl.h, hsl.s, hsl.l);
							colorCell.value = Color.toRgbString(rgb.r, rgb.g, rgb.b);
							break;
						default:
							break;
					}
				}
			}
		}
	}

	static createColorCell = () => {
		let colorCell = document.createElement("textarea");
		colorCell.classList.add("color");
		colorCell.setAttribute("readonly", "readonly");
		colorCell.addEventListener("click", Color.copyToClipboard);
		return colorCell;
	}

	static generateAll = () => {
		let iconGear = document.getElementById("iconGear");
		iconGear.classList.add("rotate");
		let colorPalette = document.getElementById("colorPalette");
		let colorTone = document.querySelector("input[type=radio][name=tone]:checked").value;
		let resultType = document.querySelector("input[type=radio][name=type]:checked").value;
		colorPalette.innerHTML = "";
		for (let i = 0; i < 18; i++) {
			let colorCell = Color.createColorCell();
			let color = Color.generate(colorTone, resultType);
			colorCell.style.backgroundColor = color;
			colorCell.value = color;
			colorPalette.appendChild(colorCell);
		}
		setTimeout(() => {
			iconGear.classList.remove("rotate");
		}, 600);
	}

	static createPalette = () => {
		let iconGear = document.getElementById("iconGear");
		iconGear.classList.add("rotate");
		let colorPalette = document.getElementById("colorPalette");
		colorPalette.innerHTML = "";
		let r = Color.randomColor(0, 255);
		let g = Color.randomColor(0, 255);
		let b = Color.randomColor(0, 255);
		let resultType = document.querySelector("input[type=radio][name=type]:checked").value;

		for (let i = 1; i < 20; i++) {
			let colorCell = document.createElement("textarea");
			colorCell.classList.add("color");
			colorCell.setAttribute("readonly", "readonly");
			let hsl = Color.rgbToHsl(r, g, b);
			let l = i * 0.05;
			let rgb = Color.hslToRgb(hsl.h, hsl.s, l);
			let color = "";
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
			colorCell.value = color;
			colorCell.addEventListener("click", Color.copyToClipboard);
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
		let r = Color.randomColor(min, max);
		let g = Color.randomColor(min, max);
		let b = Color.randomColor(min, max);
		let color;
		switch (resultType) {
			case "hex":
				color = Color.rgbToHex(r, g, b);
				break;
			case "rgb":
				color = Color.toRgbString(r, g, b);
				break;
			case "hsl":
				let hsl = Color.rgbToHsl(r, g, b);
				color = Color.toHslString(hsl.h, hsl.s, hsl.l);
				break;
			default:
				break;
		}
		return color;
	}

	static shadeAll = () => {
		let colorPalette = document.getElementById("colorPalette");
		colorPalette.innerHTML = "";
		let resultType = document.querySelector("input[type=radio]:checked").value;
		let color = document.getElementById("colorText").value;
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
			let hslArray = color.substring(4, color.length - 1).replace(/\s/g, "").split(",");
			hsl.h = hslArray[0];
			hsl.s = parseFloat(hslArray[1].replace(/%/g, "")) / 100;
			hsl.l = parseFloat(hslArray[2].replace(/%/g, "")) / 100;
		}
		else {
			return false;
		}
		for (let i = 1; i < 20; i++) {
			let l = i / 20;
			let colorCell = Color.shade(hsl, l, resultType);
			colorPalette.appendChild(colorCell);
			if (hsl.l > l && hsl.l < l + 0.049) {
				let originalColor = Color.shade(hsl, hsl.l, resultType);
				originalColor.style.animation = "wiggle 1s ease";
				colorPalette.appendChild(originalColor);
				Color.setTempText(originalColor, 2000, "your shade is here!");
			}
			else if (hsl.l === l) {
				colorCell.style.animation = "wiggle 1s ease";
				Color.setTempText(colorCell, 2000, "your shade is here!");
			}
		}
	}

	static shade = (hsl, l, resultType) => {
		let colorCell = Color.createColorCell();
		let rgb = Color.hslToRgb(hsl.h, hsl.s, l);
		let hex = Color.rgbToHex(rgb.r, rgb.g, rgb.b);
		colorCell.style.backgroundColor = hex;

		switch (resultType) {
			case "hex":
				colorCell.value = hex;
				break;
			case "rgb":
				colorCell.value = Color.toRgbString(rgb.r, rgb.g, rgb.b);
				break;
			case "hsl":
				colorCell.value = Color.toHslString(hsl.h, hsl.s, l);
				break;
			default:
				break;
		}
		return colorCell;
	}


	static randomColor = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	static toHex = (c) => {
		let hex = parseInt(c).toString(16).toUpperCase();
		return hex.length === 1 ? "0" + hex : hex;
	}

	static rgbToHex = (r, g, b) => {
		return "#" + Color.toHex(r) + Color.toHex(g) + Color.toHex(b);
	}

	static hexToRgb = (hex) => {
		let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		} : null;
	}

	static copyToClipboard = (event) => {
		let element = event.target;
		element.select();
		document.execCommand("copy");
		let text = element.value;
		element.value = "copied!";
		element.setAttribute("disabled", "disabled");
		setTimeout(() => {
			element.value = text;
			element.removeAttribute("disabled");
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
		let pattern = /^#(?:[0-9a-f]{3}){2}$/i;
		return pattern.test(value);
	}

	static isRgb = (value) => {
		let pattern = /([R][G][B][A]?[(]\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])(\s*,\s*((0\.[0-9]{1})|(1\.0)|(1)))?[)])/i;
		return pattern.test(value);
	}

	static isHsl = (value) => {
		let pattern = /hsl\(\s*(\d+)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%)\)/i;
		return pattern.test(value);
	}

	static toHslString = (h, s, l) => {
		return "hsl(" + Color.roundUp(h, 0) + ", " + parseInt(Color.roundDown(s, 2) * 100) + "%, " + parseInt(Color.roundDown(l, 2) * 100) + "%)";
	}

	static toRgbString = (r, g, b) => {
		return "rgb(" + r + ", " + g + ", " + b + ")";
	}

	static toRgbObject = (rgbText) => {
		let rgbArray = rgbText.substring(4, rgbText.length - 1).replace(/\s/g, "").split(",");
		return { r: rgbArray[0], g: rgbArray[1], b: rgbArray[2] };
	}

	static toHslObject = (hslText) => {
		let hslArray = hslText.substring(4, hslText.length - 1).replace(/\s/g, "").split(",");
		return { h: hslArray[0], s: parseFloat(hslArray[1].replace(/%/g, "")) / 100, l: parseFloat(hslArray[2].replace(/%/g, "")) / 100 };
	}

	static setTempText = (element, delay, text) => {
		let original = element.value;
		element.value = text;
		setTimeout(() => {
			element.value = original;
		}, delay);
	}

	static mix = (colors) => {
		let r = 0;
		let g = 0;
		let b = 0;
		if (colors && colors.length > 0) {
			for (const color of colors) {
				let rgb = color.getAttribute("data-color").split(",");
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
		let rgb = "rgb(255, 255, 255)";
		if (colors && colors.length > 0) {
			for (const color of colors) {
				colorArray.push(color.getAttribute("data-color"));
			}
			const mixed = Color.mix(colors);
			rgb = Color.toRgbString(mixed.r, mixed.g, mixed.b);
		}
		else {
			let em = document.createElement("em");
			em.textContent = "drop zone";
			em.className = "span-12 text-center color-3";
			colorMix.appendChild(em);
		}
		let colorText = document.getElementById("colorText");
		colorText.value = rgb;
		Color.shadeAll();
	}
}

export default Color;