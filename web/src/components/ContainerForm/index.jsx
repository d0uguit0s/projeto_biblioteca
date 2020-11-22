import React from 'react';
import './style.css';

function ContainerForm({ children }) {
	return (
		<div className='containerForm'>
			<div className='boxForm'>{children}</div>
		</div>
	);
}

export default ContainerForm;
