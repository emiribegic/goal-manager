import React, { useEffect, useState } from 'react';
import Airtable from 'airtable';
import Goal from './components/Goal';
import Footer from './components/Footer';
import './App.css';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_ID = process.env.REACT_APP_BASE_ID;

const links = [
	{
		label: 'github',
		value: 'https://github.com/emiribegic/',
	},
	{
		label: 'linkedin',
		value: 'https://www.linkedin.com/in/emiribegic/',
	},
	{
		label: 'envelope outline',
		value: 'mailto:emiri.begic@gmail.com',
	},
];

const base = new Airtable({ apiKey: API_KEY }).base(BASE_ID);

const App = () => {
	const [goals, setGoals] = useState([]);
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		base('Goals')
			.select({ view: 'Grid view' })
			.eachPage((records, fetchNextPage) => {
				setGoals(records);
				fetchNextPage();
			});
		base('Tasks')
			.select({ view: 'Grid view' })
			.eachPage((records, fetchNextPage) => {
				setTasks(records);
				fetchNextPage();
			});
	}, []);

	return (
		<div className="ui container">
			<h1 className="ui center aligned header main-header">
				Goal Manager
			</h1>
			{goals.map(goal => (
				<Goal
					key={goal.id}
					goal={goal}
					tasks={tasks.filter(
						task => task.fields.Goalid[0] === goal.id
					)}
				/>
			))}
			<Footer links={links} />
		</div>
	);
};

export default App;
