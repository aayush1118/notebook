import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import NotesContext from './NotesContext';

function Create() {
	const { setNotes } = useContext(NotesContext);

	const [note, setNote] = useState({
		title: '',
		note: '',
	});

	const history = useHistory();

	const submit = (e) => {
		e.preventDefault();
		if (note.title.length !== 0) {
			setNotes((prevItems) => [
				{ ...note, id: Date.now().toString() },
				...prevItems,
			]);
			history.push('/');
		}
	};

	return (
		<>
			<nav>
				<Link to={'/'}>back</Link>
				<button onClick={submit}>save</button>
			</nav>
			<section>
				<input
					type='text'
					placeholder='title'
					value={note.title}
					onChange={(e) =>
						setNote({ ...note, title: e.target.value })
					}
				/>
				<textarea
					placeholder='type something...'
					value={note.note}
					onChange={(e) => setNote({ ...note, note: e.target.value })}
				></textarea>
			</section>
		</>
	);
}

export default Create;
