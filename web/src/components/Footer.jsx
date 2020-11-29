import React from 'react';

// import { Container } from './styles';

function Footer() {
	return (
		<>
			<footer className='page-footer'>
				<div className='container'>
					<div className='row'>
						<div className='col l6 s12'>
							<h5 className='white-text'>Projeto Biblioteca</h5>
							<p className='grey-text text-lighten-4'>
								PAM II - PW II | ETEC de Embu
							</p>
						</div>
						<div className='col l4 offset-l2 s12'>
							<h5 className='white-text'>Link</h5>
							<ul>
								<li>
									<a className='grey-text text-lighten-3' href='#!'>
										Link 1
									</a>
								</li>
								<li>
									<a className='grey-text text-lighten-3' href='#!'>
										Link 2
									</a>
								</li>
								<li>
									<a className='grey-text text-lighten-3' href='#!'>
										Link 3
									</a>
								</li>
								<li>
									<a className='grey-text text-lighten-3' href='#!'>
										Link 4
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='footer-copyright'>
					<div className='container'>
						<center>2020 - Equipe Ombro Amigo ©</center>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
