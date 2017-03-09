import React, { Component } from 'react';
import Inventory from '../../containers/Inventory';
import Navbar from './Navbar';

class App extends Component {
	render() {
		return (
			<div className="app">
				<Navbar title='Sugar Sweet Chocolate Treats' />
				<Inventory />
			</div>
		);
	}
}

export default App;
