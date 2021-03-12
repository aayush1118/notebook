import React, { useState, useMemo } from 'react';
import { Route, Switch } from 'react-router-dom';
import Create from './components/Create';
import Grid from './components/Grid';
import ShowCard from './components/ShowCard';
import Edit from './components/Edit';
import NotesContext from './components/NotesContext';
import { example } from './data';

function App() {
	const [notes, setNotes] = useState([...example]);
	const value = useMemo(() => ({ notes, setNotes }), [notes, setNotes]);

	return (
		<div className='container'>
			<NotesContext.Provider value={value}>
				<Switch>
					<Route exact path='/' component={Grid} />
					<Route exact path='/create' component={Create} />
					<Route exact path='/note/:id' component={ShowCard} />
					<Route exact path='/edit/:id' component={Edit} />
					<Route render={() => <h1>404: page not found</h1>} />
				</Switch>
			</NotesContext.Provider>
		</div>
	);
}

export default App;
