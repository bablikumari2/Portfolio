import React, { useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './Experiences.module.css';

const Experiences = () => {
	const { newTheme } = useContext(ThemeContext);
	return (
		<div className={styles.experiences}>
			<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			>
				Work Experience
			</h1>
			<div className={styles.borderBottom} />

			<div className={styles.container}>
				<div className={styles.position}>
					Software Engineer | Innovative Code Labs Pvt. Ltd.
				</div>
				<div className={styles.date}>March 2023 - Present</div>
				<fieldset className={styles.responsibilites}>
					<legend>
						<h3> Roles & responsibilities </h3>
					</legend>
					<ul>
						<li>Built and deployed 10+ scalable web applications using the MERN stack.</li>
						<li>Developed REST APIs, improving response time by ~30%.</li>
						<li>Integrated OpenAI API for AI-driven features in production applications.</li>
						<li>Optimized frontend performance, reducing load time by ~25%.</li>
						<li>Collaborated with cross-functional teams to deliver high-quality solutions.</li>
					</ul>
				</fieldset>
			</div>

			<br />

			<div className={styles.container}>
				<div className={styles.position}>
					Software Developer | Trikara Technologies Pvt. Ltd.
				</div>
				<div className={styles.date}>September 2022 - March 2023</div>
				<fieldset className={styles.responsibilites}>
					<legend>
						<h3> Roles & responsibilities </h3>
					</legend>
					<ul>
						<li>Developed and maintained full-stack applications using React and Node.js.</li>
						<li>Built reusable UI components to improve development efficiency.</li>
						<li>Designed backend APIs and handled database operations.</li>
						<li>Contributed to 3+ client projects with end-to-end delivery.</li>
					</ul>
				</fieldset>
			</div>

			<br />

			<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			>
				Education
			</h1>
			<div className={styles.borderBottom} />

			<div className={styles.container}>
				<div className={styles.position}>
					Masai School, Bangalore | Full Stack Web Development{' '}
					<a href='/'> Learning full stack development and communication skills.</a>
				</div>
				<div className={styles.date}>2022</div>
			</div>

			<br />

			<div className={styles.container}>
				<div className={styles.position}>
					A.N College, Patna | B.Com — 79%{' '}
					<a href='/'> Accounting, Law, Financial & Taxation.</a>
				</div>
				<div className={styles.date}>2019</div>
			</div>

			<br />

			<div className={styles.container}>
				<div className={styles.position}>
					S.M College, Bhagalpur | Commerce — 73%
				</div>
				<div className={styles.date}>2015</div>
			</div>

			<br />

			<div className={styles.container}>
				<div className={styles.position}>
					New Horizon School (CBSE) — 88%
				</div>
				<div className={styles.date}>2013</div>
			</div>
		</div>
	);
};

export default Experiences;
