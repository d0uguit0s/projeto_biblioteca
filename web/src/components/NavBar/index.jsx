import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Creators as saveDataUserActions } from '../../store/ducks/dataUser';
import imagem from '../../assets/img/logo.png';

function NavBar({ successSignOut }) {
	return (
		<nav className='navBg'>
			<div className='nav-wrapper'>
				<Link to='/home' className='brand-logo'>
					<div className='teste'>
						<img src={imagem} className="img" alt="Logo"/>
						My Personal Lib
					</div>
				</Link>
				<ul id='nav-mobile' className='right hide-on-med-and-down'>
					<li>
						<Link to='/trash'>
							<i className='material-icons left'>delete</i>
							Lixeira
						</Link>
					</li>
					<li>
						<Link to='/' onClick={successSignOut}>
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

const mapDispacthToProps = dispatch => ({
	successSignOut: () => dispatch(saveDataUserActions.successSignOut()),
});

export default connect(null, mapDispacthToProps)(NavBar);
