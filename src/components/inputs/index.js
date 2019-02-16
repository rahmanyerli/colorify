import React, { Component } from "react";

export class Label extends Component {
	render() {
		return (
			<label htmlFor={this.props.for}
				id={this.props.id}
				className={this.props.class}
			>
				{this.props.children}
			</label>
		);
	}
}

export class Text extends Component {
	render() {
		return (
			<input type="text"
				id={this.props.id}
				name={this.props.name}
				defaultValue={this.props.value}
				className={this.props.class}
				placeholder={this.props.placeholder}
				readOnly={this.props.readonly}
				disabled={this.props.disabled}
				onChange={this.props.onchange}
				onBlur={this.props.onblur}
			/>
		);
	}
}

export class Email extends Component {
	render() {
		return (
			<input type="email"
				id={this.props.id}
				name={this.props.name}
				defaultValue={this.props.value}
				className={this.props.class}
				placeholder={this.props.placeholder}
				readOnly={this.props.readonly}
				disabled={this.props.disabled}
				onChange={this.props.onchange}
				onBlur={this.props.onblur}
			/>
		);
	}
}

export class Password extends Component {
	render() {
		return (
			<input type="password"
				id={this.props.id}
				name={this.props.name}
				defaultValue={this.props.value}
				className={this.props.class}
				placeholder={this.props.placeholder}
				readOnly={this.props.readonly}
				disabled={this.props.disabled}
				onChange={this.props.onchange}
				onFocus={this.props.onfocus}
				onBlur={this.props.onblur}
			/>
		);
	}
}

export class CheckBox extends Component {
	render() {
		return (
			<input type="checkbox"
				id={this.props.id}
				name={this.props.name}
				defaultValue={this.props.value}
				className={this.props.class}
				placeholder={this.props.placeholder}
				readOnly={this.props.readonly}
				disabled={this.props.disabled}
				defaultChecked={this.props.checked}
				onChange={this.props.onchange}
				onBlur={this.props.onblur}
			/>
		);
	}
}

export class Radio extends Component {
	render() {
		return (
			<input type="radio"
				id={this.props.id}
				name={this.props.name}
				defaultValue={this.props.value}
				className={this.props.class}
				placeholder={this.props.placeholder}
				readOnly={this.props.readonly}
				disabled={this.props.disabled}
				defaultChecked={this.props.checked}
				onChange={this.props.onchange}
				onBlur={this.props.onblur}
			/>
		);
	}
}

export class Button extends Component {
	render() {
		return (
			<button type="button"
				id={this.props.id}
				name={this.props.name}
				defaultValue={this.props.value}
				className={this.props.class}
				disabled={this.props.disabled}
				onClick={this.props.onclick}
			>
				{this.props.children}
			</button>
		);
	}
}