import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/nav';
import Home from './components/home';
import MaterialColors from './components/material-colors';
import FlatColors from './components/flat-colors';
import ColorGenerator from './components/color-generator';
import ColorShadesTints from './components/color-shades-tints';
import ColorMixer from './components/color-mixer';
import Notfound from './components/notfound';
import { Main, Section, Div } from './components/elements';
import MenuButton from './components/menu-button';
import SideMenu from './components/side-menu';

class App extends Component {

	render() {
		return (
			<Router>
				<Div>
					<Main id="main">
						<Section>
							<MenuButton />
							<SideMenu>
								<Nav />
							</SideMenu>
						</Section>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/home" component={Home} />
							<Route path="/material-colors" component={MaterialColors} />
							<Route path="/flat-colors" component={FlatColors} />
							<Route path="/color-generator" component={ColorGenerator} />
							<Route path="/color-shades-tints" component={ColorShadesTints} />
							<Route path="/color-mixer" component={ColorMixer} />
							<Route component={Notfound} />
						</Switch>
						<Section class="ads" />
					</Main>
				</Div>
			</Router>
		);
	}
}

export default App;
