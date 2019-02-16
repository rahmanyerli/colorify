import React, { Component } from 'react';

export class Div extends Component {
	render() {
		return (
			<div
				id={this.props.id}
				name={this.props.name}
				className={this.props.class}
				draggable={this.props.draggable}
				dropzone={this.props.dropzone}
				data-color={this.props['data-color']}
			>
				{this.props.children}
			</div>
		);
	}
}

export class Header extends Component {
	render() {
		return (
			<header
				id={this.props.id}
				name={this.props.name}
				className={this.props.class}
				draggable={this.props.draggable}
				dropzone={this.props.dropzone}
			>
				{this.props.children}
			</header>
		);
	}
}

export class Main extends Component {
	render() {
		return (
			<main
				id={this.props.id}
				name={this.props.name}
				className={this.props.class}
				draggable={this.props.draggable}
				dropzone={this.props.dropzone}
			>
				{this.props.children}
			</main>
		);
	}
}

export class Footer extends Component {
	render() {
		return (
			<footer
				id={this.props.id}
				name={this.props.name}
				className={this.props.class}
				draggable={this.props.draggable}
				dropzone={this.props.dropzone}
			>
				{this.props.children}
			</footer>
		);
	}
}

export class Aside extends Component {
	render() {
		return (
			<aside
				id={this.props.id}
				name={this.props.name}
				className={this.props.class}
				draggable={this.props.draggable}
				dropzone={this.props.dropzone}
			>
				{this.props.children}
			</aside>
		);
	}
}

export class Article extends Component {
	render() {
		return (
			<article
				id={this.props.id}
				name={this.props.name}
				className={this.props.class}
				draggable={this.props.draggable}
				dropzone={this.props.dropzone}
			>
				{this.props.children}
			</article>
		);
	}
}

export class Section extends Component {
	render() {
		return (
			<section
				id={this.props.id}
				name={this.props.name}
				className={this.props.class}
				draggable={this.props.draggable}
				dropzone={this.props.dropzone}
			>
				{this.props.children}
			</section>
		);
	}
}

export class Hr extends Component {
	render() {
		return (
			<hr />
		);
	}
}

export class Br extends Component {
	render() {
		return (
			<br />
		);
	}
}

export class Span extends Component {
	render() {
		return (
			<span
				id={this.props.id}
				name={this.props.name}
				className={this.props.class}
			>
				{this.props.children}
			</span>
		);
	}
}

export class Em extends Component {
	render() {
		return (
			<em
				id={this.props.id}
				name={this.props.name}
				className={this.props.class}
			>
				{this.props.children}
			</em>
		);
	}
}

export class Strong extends Component {
	render() {
		return (
			<strong
				id={this.props.id}
				name={this.props.name}
				className={this.props.class}
			>
				{this.props.children}
			</strong>
		);
	}
}