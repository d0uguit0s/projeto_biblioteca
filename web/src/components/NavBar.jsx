import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
	return (
		<nav>
			<div className='nav-wrapper'>
				<a href='#' className='brand-logo'>
					Logo
				</a>
				<ul id='nav-mobile' className='right hide-on-med-and-down'>
					<li>
						<Link to='/user'>Usuário</Link>
					</li>
					<li>
						<Link to='/'>
							<i className='material-icons left'>login</i>
							Sair
						</Link>
					</li>
					{/* <li>
						<Link to='badges.html'>Components</Link>
					</li>
					<li>
						<Link to='collapsible.html'>JavaScript</Link>
					</li> */}
				</ul>
			</div>
		</nav>
	);
}

export default NavBar;
