import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import NotesContext from './NotesContext';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { motion } from 'framer-motion';
import { pageStyle, pageTransition, pageVariantsL } from './animationFns';

const ResponsiveGridLayout = WidthProvider(Responsive);

function Grid() {
	const { notes } = useContext(NotesContext);
	const colors = [
		'#feae5f',
		'#d5e279',
		'#aa9dc8',
		'#fa886f',
		'#71caf1',
		'#75c57d',
		'#FF7CC3',
	];
	const history = useHistory();

	const [allowForward, setAllowForward] = useState(true);
	const [allowDrag, setAllowDrag] = useState(false);

	const allowMove = () => {
		setAllowForward(!allowForward);
		setAllowDrag(!allowDrag);
	};

	const forwardTo = (id) => {
		if (allowForward) {
			history.push(`/note/${id}`);
		}
	};

	return (
		<motion.div
			style={pageStyle}
			// initial='initial'
			animate='in'
			exit='out'
			variants={pageVariantsL}
			transition={pageTransition}
		>
			<nav className='nav'>
				<h2 className='brand'>Notes</h2>
				<Link to={'/search'} className='btn'>
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
						<circle cx='11' cy='11' r='8'></circle>
						<line x1='21' y1='21' x2='16.65' y2='16.65'></line>
					</svg>
				</Link>
			</nav>

			<ResponsiveGridLayout
				className='layout'
				cols={{ lg: 2, md: 2, sm: 2, xs: 2, xxs: 2 }}
				margin={[10, 10]}
				isResizable={false}
				compactType='vertical'
				isBounded={true}
				isDraggable={allowDrag}
			>
				{notes.map((x, i) => (
					<div
						key={x.id}
						data-grid={{
							x: i % 2 === 0 ? 0 : 1,
							y: 0,
							w: 1,
							h: 1,
						}}
					>
						<div
							className={allowDrag ? 'draggable card' : 'card'}
							style={{
								background: colors[i % colors.length],
							}}
							onClick={() => forwardTo(x.id)}
						>
							<h4 className='card-title'>{x.title}</h4>
							<p className='card-date'>{x.date}</p>
						</div>
					</div>
				))}
			</ResponsiveGridLayout>

			<div className='floating'>
				<button className='moveBtn' onClick={allowMove}>
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
						<polyline points='5 9 2 12 5 15'></polyline>
						<polyline points='9 5 12 2 15 5'></polyline>
						<polyline points='15 19 12 22 9 19'></polyline>
						<polyline points='19 9 22 12 19 15'></polyline>
						<line x1='2' y1='12' x2='22' y2='12'></line>
						<line x1='12' y1='2' x2='12' y2='22'></line>
					</svg>
				</button>
				<Link to={'/create'} className='createBtn'>
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
						<line x1='12' y1='5' x2='12' y2='19'></line>
						<line x1='5' y1='12' x2='19' y2='12'></line>
					</svg>
				</Link>
			</div>
		</motion.div>
	);
}

export default Grid;
