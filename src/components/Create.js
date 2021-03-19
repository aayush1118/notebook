import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import NotesContext from './NotesContext';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';

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
				{
					...note,
					date: dayjs().format('MMM D, YYYY'),
					id: Date.now().toString(),
				},
				...prevItems,
			]);
			history.push('/');
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
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
					value={note.title}
					onChange={(e) =>
						setNote({ ...note, title: e.target.value })
					}
					className='form-title'
					maxLength='30'
				/>
				<textarea
					placeholder='Type something...'
					value={note.note}
					onChange={(e) => setNote({ ...note, note: e.target.value })}
					className='form-note'
				></textarea>
			</section>
		</motion.div>
	);
}

export default Create;
