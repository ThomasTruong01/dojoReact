import React from 'react';
import './index.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: []
		};
		this.handleClick = this.handleClick.bind(this);
	}

	counter(myCounter, type) {
		let counters = this.state.counter;
		if (type === 'Increment') {
			if (counters[myCounter].count >= 0) {
				counters[myCounter].count++;
			}
		} else if (type === 'Decrement') {
			if (counters[myCounter].count > 0) {
				counters[myCounter].count--;
			}
		}
		this.setState({ counter: counters });
		console.log(counters);
	}
	addCounter() {
		let arr = this.state.counter;
		arr.push({ count: 0 });
		this.setState({ count: arr });
		console.log(this.state);
	}
	handleClick(e) {
		const btnPressed = e.currentTarget.innerText;
		if (btnPressed === 'Add counter') {
			this.addCounter();
		} else if (btnPressed === 'Increment' || btnPressed === 'Decrement') {
			const myCounter = e.currentTarget.getAttribute('attr-key');
			this.counter(myCounter, btnPressed);
		}
	}

	render() {
		const counter = this.state.counter;
		return (
			<div className='container'>
				<button onClick={this.handleClick}>Add counter</button>
				{counter.map((item, x) => {
					return (
						<div className='counter' key={x}>
							<div className='count'>{item.count}</div>
							<div className='controls'>
								<button className='add' onClick={this.handleClick} attr-key={x}>
									Increment
								</button>
								<button className='sub' onClick={this.handleClick} attr-key={x}>
									Decrement
								</button>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
export default App;
