import React, { useContext } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import NotesContext from './NotesContext';
import { motion } from 'framer-motion';
import { pageStyle, pageTransition, pageVariantsR } from './animationFns';

function ShowCard() {
	const { notes } = useContext(NotesContext);
	const match = useRouteMatch();
	const id = match.params.id;
	const note = notes.find((x) => x.id === id);
	return (
		<motion.div
			style={pageStyle}
			initial='initial'
			animate='in'
			exit='out'
			variants={pageVariantsR}
			transition={pageTransition}
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
				<Link to={`/edit/${note.id}`} className='btn'>
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
						<path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7'></path>
						<path d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z'></path>
					</svg>
				</Link>
			</nav>
			<section>
				<h1 className='show-title'>{note.title}</h1>
				<p className='show-date'>{note.date}</p>
				<p className='show-note'>{note.note}</p>
			</section>
		</motion.div>
	);
}

export default ShowCard;
