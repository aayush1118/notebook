import React, { useState, useMemo } from 'react';
import { Route, Switch } from 'react-router-dom';
import Create from './components/Create';
import Grid from './components/Grid';
import ShowCard from './components/ShowCard';
import NotesContext from './components/NotesContext';

function App() {
	const [notes, setNotes] = useState([]);
	const value = useMemo(() => ({ notes, setNotes }), [notes, setNotes]);
	return (
		<>
			<NotesContext.Provider value={value}>
				<Switch>
					<Route exact path='/' component={Grid} />
					<Route exact path='/create' component={Create} />
					<Route exact path='/note/:id' component={ShowCard} />
					<Route render={() => <h1>404: page not found</h1>} />
				</Switch>
			</NotesContext.Provider>
		</>
	);
}

export default App;
