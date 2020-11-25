import React from 'react';
import Card from '../../components/Card/index';
import Footer from '../../components/Footer';
import ModalAddBook from '../../components/ModalAddBook/index';
import NavBar from '../../components/NavBar';
import './style.css';

// import { Container } from './styles';

function Home() {
	return (
		<>
			<NavBar />
			<div className='titleArea'>
				<h1>BEM VINDO(A)!</h1>
			</div>
			<div className='containerContent'>
				<div className='box-content'>
					<ModalAddBook />
					<div className='cardArea'>
						<Card
							title='A menina que roubava livros'
							text='Uma menina que rouba livros :v'
						/>
						<Card
							title='A menina que roubava livros'
							text='Uma menina que rouba livros :v'
						/>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Home;
