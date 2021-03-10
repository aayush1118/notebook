import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import NotesContext from './NotesContext';
import { useHistory } from 'react-router-dom';

function Create() {
	const { setNotes } = useContext(NotesContext);
	const [note, setNote] = useState({
		id: null,
		title: null,
		note: '',
	});
	const history = useHistory();

	return (
		<>
			<nav>
				<Link to={'/'}>back</Link>
				<Link to={'/'}>save</Link>
			</nav>
			<section>
				<input type='text' placeholder='title' value={note.title} />
				<textarea
					placeholder='type something...'
					value={note.note}
				></textarea>
			</section>
		</>
	);
}

export default Create;
