import React from 'react';

const Footer = ({ links }) => {
	const footerNav = links.map(link => {
		const iconColor =
			link.label === 'github'
				? 'grey'
				: link.label === 'linkedin'
				? 'blue'
				: link.label === 'envelope outline'
				? 'red'
				: '';

		return (
			<a
				key={link.label}
				href={link.value}
				target="_blank"
				rel="noopener noreferrer"
			>
				<i
					className={`circular inverted ${iconColor} ${link.label} link icon`}
				></i>
			</a>
		);
	});

	return (
		<div className="ui center aligned very padded basic segment">
			{footerNav}
		</div>
	);
};

export default Footer;
