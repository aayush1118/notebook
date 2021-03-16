import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import NotesContext from './NotesContext';
import { Responsive, WidthProvider } from 'react-grid-layout';

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

	return (
		<>
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

			{/* <section className='grid'> */}
			<ResponsiveGridLayout
				className='layout'
				cols={{ lg: 2, xxs: 2 }}
				margin={[10, 10]}
				isResizable={false}
				compactType='vertical'
				isBounded={true}
			>
				{notes.map((x, i) => (
					// <Link to={`/note/${x.id}`} key={x.id}>
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
							className='card'
							style={{
								background: colors[i % colors.length],
							}}
						>
							<h4 className='card-title'>{x.title}</h4>
							<p className='card-date'>{x.date}</p>
						</div>
					</div>
					// </Link>
				))}
			</ResponsiveGridLayout>

			{/* </section> */}

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
		</>
	);
}

export default Grid;
