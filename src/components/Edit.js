import React, { useContext, useState } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import NotesContext from './NotesContext';
import dayjs from 'dayjs';

function Edit() {
	const { notes, setNotes } = useContext(NotesContext);
	const match = useRouteMatch();
	const id = match.params.id;
	const oldNote = notes.find((x) => x.id === id);

	const [newNote, setNewNote] = useState({
		title: oldNote.title,
		note: oldNote.note,
	});

	const history = useHistory();

	const submit = (e) => {
		e.preventDefault();
		if (newNote.title.length !== 0) {
			setNotes((prevItems) => [
				{
					...newNote,
					date: dayjs().format('MMM D, YYYY'),
					id: Date.now().toString(),
				},
				...prevItems.filter((x) => x !== oldNote),
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
					value={newNote.title}
					onChange={(e) =>
						setNewNote({ ...newNote, title: e.target.value })
					}
				/>
				<textarea
					placeholder='type something...'
					value={newNote.note}
					onChange={(e) =>
						setNewNote({ ...newNote, note: e.target.value })
					}
				></textarea>
			</section>
		</>
	);
}

export default Edit;
