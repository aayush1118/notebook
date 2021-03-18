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
			<nav className='nav'>
				<Link to={'/'} className='btn'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='1.7'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<polyline points='15 18 9 12 15 6'></polyline>
					</svg>
				</Link>
				<button onClick={submit} className='btn'>
					Save
				</button>
			</nav>
			<section>
				<input
					type='text'
					placeholder='Title'
					value={newNote.title}
					onChange={(e) =>
						setNewNote({ ...newNote, title: e.target.value })
					}
					className='form-title'
				/>
				<textarea
					placeholder='Type something...'
					value={newNote.note}
					onChange={(e) =>
						setNewNote({ ...newNote, note: e.target.value })
					}
					className='form-note'
				></textarea>
			</section>
		</>
	);
}

export default Edit;
