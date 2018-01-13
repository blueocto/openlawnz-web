import React, { Component } from 'react';
import {
	withRouter,
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'
import MainNav from './components/MainNav.jsx';
import Home from './Home.jsx';
import CaseSearch from './CaseSearch.jsx';
import SingleCase from './SingleCase.jsx';
import Plugin from './Plugin.jsx';
import About from './About.jsx';
import { Container, Header, Icon, Menu, Segment } from 'semantic-ui-react'

class App extends Component {

	render() {
		
		const MainNavWithRouter = withRouter(props => <MainNav {...props}/>);

		return (

			<Router>
				
				<Container>
					
					<Header as='h1' icon textAlign='center' style={{paddingTop: 15}}>
						<Icon name='legal' />
						OpenLaw NZ
						<Header.Subheader>
						Linking New Zealand case law with legislation
						</Header.Subheader>
					</Header>

					<MainNavWithRouter />

					<Segment attached='bottom' padded='very'>

						<Route exact path="/" component={Home} />
						<Route exact path="/case-search" component={CaseSearch} />
						<Route exact path="/case/:id" component={SingleCase}/>
						<Route exact path="/about" component={About} />
						<Route exact path="/plugin" component={Plugin} />

					</Segment>

				</Container>

			</Router>
    	);
	}
}

export default App;
