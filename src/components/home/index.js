import React, { Component } from 'react'
import './index.css'
import Color from '../color'

class Home extends Component {

	hex = null
	rgb = null
	hsl = null
	main = null
	title = null

	hexChanged = () => {
		this.resetColor()
		if (!Color.isHex(this.hex.value)) {
			this.rgb.value = "rgb("
			this.hsl.value = "hsl("
			this.main.style.backgroundColor = "#FFFFFF"
			return
		}
		const rgbObj = Color.hexToRgb(this.hex.value)

		if (rgbObj) {
			this.checkDarkness(rgbObj)
			this.rgb.value = Color.toRgbString(rgbObj.r, rgbObj.g, rgbObj.b)
			const hslObj = Color.rgbToHsl(rgbObj.r, rgbObj.g, rgbObj.b)

			if (hslObj) {
				this.hsl.value = Color.toHslString(hslObj.h, hslObj.s, hslObj.l)
				this.main.style.backgroundColor = this.hex.value
			}
		}
		else {
			this.resetText()
		}
	}

	rgbChanged = () => {
		this.resetColor()
		if (!Color.isRgb(this.rgb.value)) {
			this.hex.value = "#"
			this.hsl.value = "rgb("
			this.main.style.backgroundColor = "#FFFFFF"
			return
		}
		const rgbObj = Color.toRgbObject(this.rgb.value)

		if (rgbObj) {
			this.checkDarkness(rgbObj)
			this.hex.value = Color.rgbToHex(rgbObj.r, rgbObj.g, rgbObj.b)
			const hslObj = Color.rgbToHsl(rgbObj.r, rgbObj.g, rgbObj.b)

			if (hslObj) {
				this.hsl.value = Color.toHslString(hslObj.h, hslObj.s, hslObj.l)
				this.main.style.backgroundColor = this.hex.value
			}
		}
		else {
			this.resetText()
		}
	}

	hslChanged = () => {
		this.resetColor()
		if (!Color.isHsl(this.hsl.value)) {
			this.hex.value = "#"
			this.rgb.value = "rgb("
			this.main.style.backgroundColor = "#FFFFFF"
			return
		}
		const hslObj = Color.toHslObject(this.hsl.value)
		const rgbObj = Color.hslToRgb(hslObj.h, hslObj.s, hslObj.l)

		if (rgbObj) {
			this.checkDarkness(rgbObj)
			this.rgb.value = Color.toRgbString(rgbObj.r, rgbObj.g, rgbObj.b)
			this.hex.value = Color.rgbToHex(rgbObj.r, rgbObj.g, rgbObj.b)
			this.main.style.backgroundColor = this.hex.value
		}
		else {
			this.resetText()
		}
	}

	componentDidMount() {
		this.hex = document.getElementById("hex")
		this.rgb = document.getElementById("rgb")
		this.hsl = document.getElementById("hsl")
		this.main = document.getElementById("main")
		this.title = document.getElementById("title")
	}

	resetColor = () => {
		this.hex.style.color = "#1A1A1A"
		this.rgb.style.color = "#1A1A1A"
		this.hsl.style.color = "#1A1A1A"
		this.title.style.color = "#1A1A1A"
	}

	resetText = () => {
		this.hex.value = "#"
		this.rgb.value = "rgb("
		this.main.style.backgroundColor = "#FFFFFF"
	}

	checkDarkness = (rgbObj) => {
		if (Color.isDark(rgbObj)) {
			this.hex.style.color = "rgba(255, 255, 255, 0.9)"
			this.rgb.style.color = "rgba(255, 255, 255, 0.9)"
			this.hsl.style.color = "rgba(255, 255, 255, 0.9)"
			this.title.style.color = "rgba(255, 255, 255, 0.9)"
		}
	}

	componentWillUnmount() {
		const main = document.getElementById("main")
		main.style.backgroundColor = "#FFFFFF"
	}

	render() {
		return (
			<main>
				<br />
				<h1 id="title">Home</h1>
				<hr />
				<div className="converter">
					<input type="text"
						id="hex"
						name="hex"
						placeholder="#FF0000"
						defaultValue="#"
						onChange={this.hexChanged} />
					<input type="text"
						id="rgb"
						name="rgb"
						placeholder="rgb(255, 0, 0)"
						defaultValue="rgb("
						onChange={this.rgbChanged} />
					<input type="text"
						id="hsl"
						name="hsl"
						placeholder="hsl(0, 100%, 50%)"
						defaultValue="hsl("
						onChange={this.hslChanged} />
				</div>
			</main>
		)
	}
}

export default Home