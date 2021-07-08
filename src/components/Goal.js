import React from 'react';

const Goal = ({ goal, tasks }) => {
	const renderedTasks = tasks.map(task => {
		if (task.fields.Status === 'Done') {
			return (
				<li key={task.id}>
					<del>{task.fields.Task}</del>
				</li>
			);
		} else {
			return <li key={task.id}>{task.fields.Task}</li>;
		}
	});

	const iconVisibility =
		goal.fields['Total task count'] === 0
			? 'disabled grey'
			: goal.fields['Total task count'] === goal.fields['Tasks completed']
			? 'teal'
			: 'disabled grey';

	return (
		<div
			className="ui raised very padded text container segment"
			key={goal.id}
		>
			<h2 className="ui header">
				<i className={`${iconVisibility} check icon`}></i>
				<div className="content">{goal.fields.Title}</div>
			</h2>
			<div className="ui horizontal list">
				<div className="item">
					<h3 className="ui red sub header">
						Deadline:{' '}
						{goal.fields.Deadline ? goal.fields.Deadline : 'none'}
					</h3>
				</div>
				<div className="item">
					<h3 className="ui green sub header">
						Tasks Completed: {goal.fields['Tasks completed']} /{' '}
						{goal.fields['Total task count']}
					</h3>
				</div>
			</div>
			<ul className="ui list">{renderedTasks}</ul>
			<div className="ui hidden divider"></div>
		</div>
	);
};

export default Goal;
