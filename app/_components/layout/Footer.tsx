import React from 'react';

const Footer = () => {
	return (
		<div
			style={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				padding: '0.5rem',
			}}
		>
			<h3>michalstachnik.pl © {new Date().getFullYear()}</h3>
		</div>
	);
};

export default Footer;
