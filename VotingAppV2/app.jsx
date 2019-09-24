class App extends React.Components {
	constructor(props) {
		super(props);
		this.state = {
			React: 0,
			Redux: 0,
			Node: 0,
			Express: 0
		};
	}

	castVotes = e => {
		const myVote = e.target.parentElement.querySelector('.fwName').innerText;
		Votes[myVote]++;
		const voteCout = (e.target.parentElement.querySelector(
			'.voteCount'
		).innerText = Votes[myVote]);
	};
	List = props => {
		const myItems = Object.keys(props.items);
		console.log('list', myItems);
		const listItems = Object.keys(props.items).map(itemString => {
			return (
				<div key={itemString} className='frameWork'>
					<div className='voteCircle'>
						<div className='voteCount'></div>
					</div>
					<div className='fwName'>{itemString}</div>
					<div className='vote' onClick={e => castVotes(e)}>
						+
					</div>
				</div>
			);
		});
		return <ul>{listItems}</ul>;
	};

	render() {
		return <List items={this.state} />;
	}
}
