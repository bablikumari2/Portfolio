import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { ThemeContext } from './ContextProvider/ThemeContext';

function App() {
	const [state, setState] = useState(false);
	const { newTheme, open, handleMenu } =
		React.useContext(ThemeContext);
	const scrollRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			setState(true);
		}, 2200);
	}, []);

	return (
		<React.Fragment>
			{!state ? (
				<div
					style={{
						background: `${newTheme.background}`,
					}}
					className='logoStart'
				>
					<img
						src='data:image/jpeg;base64,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'
						alt='logo'
					/>
				</div>
			) : (
				<div className='components'>
					<div
						style={{
							background: `${newTheme.menuBackground}`,
							color: `${newTheme.title}`,
							left: `${open ? '-100vw' : '0'}`,
						}}
						className='links'
					>
						<a onClick={handleMenu} href='#home'>
							Home
						</a>
						<a onClick={handleMenu} href='#about'>
							About
						</a>
						<a onClick={handleMenu} href='#experience'>
							Experience
						</a>

						<a onClick={handleMenu} href='#projects'>
							Projects
						</a>
						<a onClick={handleMenu} href='#techStacks'>
							Skills
						</a>
						<a onClick={handleMenu} href='#contact'>
							Contact
						</a>
					</div>
					<Navbar />
					<Home scrollRef={scrollRef} />
				</div>
			)}
		</React.Fragment>
	);
}

export default App;
