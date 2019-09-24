import React, { Component } from 'react';
import ListItem from './componets/ListItem';

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ballot: { React: 0, Redux: 0, Node: 0, Express: 0 }
		};
		this.castVotes = this.castVotes.bind(this);
	}

	castVotes(myVote) {
		let ballot = this.state.ballot;
		ballot[myVote]++;
		console.log(ballot);
		this.setState({ ballot: ballot });
	}
	sortObject(obj) {
		var arr = [];
		var prop;
		for (prop in obj) {
			if (obj.hasOwnProperty(prop)) {
				arr.push({
					key: prop,
					value: obj[prop]
				});
			}
		}
		arr.sort(function(a, b) {
			return b.value - a.value;
		});
		return arr; // returns array
	}

	render() {
		const js = this.sortObject(this.state.ballot);
		return (
			<div className='container'>
				<h1>My Voting Booth</h1>
				{
					(console.log(this.sortObject(this.state.ballot)),
					Object.keys(js).map(itemString => {
						console.log(itemString);
						return (
							<div key={js[itemString].key}>
								<ListItem
									item={js[itemString].key}
									castVotes={this.castVotes}
									vote={js[itemString].value}
								/>
							</div>
						);
					}))
				}
			</div>
		);
	}
}

export default App;
