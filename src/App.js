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
						src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAkFBMVEX///8ujd45m+Q4meNKqegti947neQsit1Ip+gYhNwwkeCtzfA+oeZMqugulOGAvOx6tepTr+q83Pbd7fr1+v6azPHQ4vbn8fschtzz+P2ky/DK4/fs9fzU6fmVyPA8o+e20/GNuuoAgNuXwOxcoeNNmuJvr+gikeFbqOaw1POIwO50t+y12fWi0PJmtevK5Pe+9zuaAAADUklEQVR4nO3ZW3eiMBSGYQFFdIAqeECpg9pWalvt//93o3LUUsBZ0qzG97mTlYudz52EQ6sFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADuweRPueXEFV1iw1xl3au07q8mogttznTtdevwet7TTHSxDXnudmo6xLAaiS63CY+9uhEceV1HdMENWFyVQaezHoiu+PbcnnJVBor3It+uoFyr238UXfOtzXvXhyBdJwyuDkF5EV3zzTnPdr9Up+d1zzLwJNwYq4wmT33vLAQZj8hqjt1VstZQpLxZqvbk5ZbHSnQ1gvidLARPugOypkkWgnKvjdBadrMQRNcizECxY8p9Hg1HYT/OoL8RXYow8zBphFB0KcKMsgwWomtpwMyfrwZF5vlnpEGawVZYpU3xN2H6F18Iw9z+twy1iP0mrthGTF+TqRXK9f00HSjZprgM7bIINPs1G5tmYIqrtwHz0iY4hZDdGuvJNVVgxTe3DdUq9jQdbWrRJakycKsjUM/6IM5AF1jzrZmqXkXL7Qd2fE01xJV8a1u7dPondu5cSDOQ6Fwwc3MtXgialrs/cLRkrDz3B75qJnRt81Bkl39f8q7Ho1V57hPfkjmZ6qbGu6GRmozX5HleCNIuqLW+d1lkTVf2Y0bpUlBrvSFMIzDfmy7tx0z1IGLu6wx/M+PhgS7PeyQ3zeBvjdFOMjowJbpDuiqDRRpBvch+iWsy8NOFcFgKEn17dnUjUp3BWA8Mo/boXyTNIKiYlW+ZaQJGYMj0vdFNZhaMvx80W4wtM2uCQxv4P1dh87IMzvpgO8zN2AgOG8HZb3keFY7cZHL5PhgNz6b8xVBcvU3IMsj1wXtpBEFbps2gdcygHTGyPpgm1woZlkTH4klRBh9GWQR7ybqgOINtSQaSbYcnbmBFchn4ybVLbaMt1aEYK+qD0XfLwBhLtw6OXCP5j3Nno/O1EQ6rYLiTbTOMFWbQctoXx6GxH8vz6uxScQat0aeT8+lKuQYS32RwV9z2MHLPGdAHWR9YO9GlCEMGZHBEBmRw5FpxBkMyuOcMZmkG8nw/vNpDsh9I+lBYx2PUCNaH6EJEmu6toXXfERy4zqfUz8YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD//QN8glUvhfgU/AAAAABJRU5ErkJggg=='
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
						<a onClick={handleMenu} href='#education'>
							Experience
						</a>

						<a onClick={handleMenu} href='#projects'>
							Projects
						</a>
						<a onClick={handleMenu} href='#techStacks'>
							Profeciencies
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
