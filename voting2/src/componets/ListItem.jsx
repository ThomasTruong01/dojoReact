import React from 'react';

export default function ListItem(props) {
	function handleClick(e) {
		const myVote = e.target.parentElement.querySelector('.fwName').innerText;
		props.castVotes(myVote);
		// props.castVotes();
	}
	return (
		<div className='frameWork'>
			<div className='voteCircle'>
				<div className='voteCount'>{props.vote}</div>
			</div>
			<div className='fwName'>{props.item}</div>
			<div className='vote' onClick={handleClick}>
				+
			</div>
		</div>
	);
}
// export default ListItem;
