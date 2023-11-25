import React from 'react';

const Footer = () => {
	return (
		<div
			style={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				padding: '0.5rem',
				position: 'absolute',
				bottom: 0,
			}}
		>
			<h4>michalstachnik.pl © {new Date().getFullYear()}</h4>
		</div>
	);
};

export default Footer;
