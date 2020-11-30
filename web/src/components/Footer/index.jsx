import React from 'react';
import './style.css';

// import { Container } from './styles';

function Footer() {
	return (
		<>
			<footer className='page-footer'>
				<div className='containera'>
					<div className='row containera'>
						<h5 className='white-text containera'>Projeto Biblioteca</h5>
						<p className='grey-text text-lighten-4'>
								PAM II - PW III | ETEC de Embu
						</p>
						<a className='white-text text-link' href='https://github.com/douglassilvaa/projeto_biblioteca' target='blank'>Repositório GitHub</a>
					</div>
				</div>
				<div className='footer-copyright'>
					<div className='container'>
						<p>2020 - Equipe Ombro Amigo ©</p>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
