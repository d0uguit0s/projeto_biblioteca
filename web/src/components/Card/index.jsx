import React from 'react';
import './style.css';

// import { Container } from './styles';

function Card({ title, text }) {
	return (
		<div className='col s12 m6'>
			<div className='card blue-grey darken-1'>
				<div className='card-content white-text'>
					<span className='card-title'>{title}</span>
					<p>{text}</p>
				</div>
				<div className='card-action'>
					<a href='#'>
						<i className='material-icons right btn_done'>done</i>
					</a>
					<a href='#'>
						<i className='material-icons right btn_delete'>delete</i>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Card;
