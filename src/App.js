import React, { Component } from 'react';
import Routes from './routes';
import Loader from './components/loader/loader';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Routes />
				<Loader />
			</div>
		);
	}
}

export default App;
