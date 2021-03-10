import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

function Grid() {
	return (
		<>
			<nav>
				<h2>Notes</h2>
				<Link to={'/search'}>search</Link>
			</nav>
			<Link to={'/note/asdf'}>
				<Card></Card>
			</Link>
			<Link to={'/note/asdf'}>
				<Card></Card>
			</Link>
			<Link to={'/note/asdf'}>
				<Card></Card>
			</Link>
			<Link to={'/note/asdf'}>
				<Card></Card>
			</Link>
			<Link to={'/create'}>
				<button>create</button>
			</Link>
		</>
	);
}

export default Grid;
