import React, { useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './TechStacks.module.css';

const TechStacks = () => {
	const { newTheme } = useContext(ThemeContext);
	return (
		<div
			data-aos='fade-right'
			data-aos-offset='200'
			data-aos-easing='ease-in-sine'
			data-aos-duration='800'
		>
			<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			>
				Skills
			</h1>
			<div className={styles.borderBottom} />
			<div className={styles.container}>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					{/* <i className='devicon-html5-plain colored' /> */}
					{/* <i class="devicon-html5-plain-wordmark"></i> */}
					<i class="devicon-html5-plain"></i>
					{/* <img src='https://img.icons8.com/nolan/344/html-5.png'></img> */}
					<span>HTML</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					{/* <i className='devicon-css3-plain colored' /> */}
					<i class="devicon-css3-plain"></i>
					<span>CSS</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					{/* <i className='devicon-javascript-plain colored' /> */}
					<i class="devicon-javascript-plain"></i>
					<span>Javascript</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					{/* <i className='devicon-react-original colored' /> */}
					<i class="devicon-react-original"></i>
					<span>React</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i
						
						// className='devicon-redux-original'
						class="devicon-redux-original"
					/>
					<span>Redux</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i class="devicon-nodejs-plain"></i>
					<span>Node</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-express-original' />
					<span>Express</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
				<i class="devicon-mongodb-plain"></i>
					<span>MongoDB</span>
				</div>
			</div>
		</div>
	);
};

export default TechStacks;
