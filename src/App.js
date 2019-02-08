import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/nav';
import Aside from './components/aside';
import Home from './components/home';
import ColorGenerator from './components/color-generator';
import Notfound from './components/notfound';
import { Main, Section, Div, Header } from './components/elements';
import { CheckBox } from './components/inputs';

class App extends Component {
	render() {
		return (
			<Router>
				<Div>
					<Main id="main">
						<Section>
							<CheckBox id="menu-button" />
							<Aside>
								<Nav></Nav>
							</Aside>
						</Section>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/home" component={Home} />
							<Route path="/color-generator" component={ColorGenerator} />
							<Route component={Notfound} />
						</Switch>
						<Section>Ads.</Section>
					</Main>
				</Div>
			</Router>
		);
	}
}

export default App;
