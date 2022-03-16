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
				Education
			</h1>
			<div className={styles.borderBottom} />

			<div className={styles.container}>
				<div className={styles.position}>
				Masai School  | Full Stack Web Developer{' '}
					<a href=''>  Learning Full Stack Developement and Communication skills.</a>
				</div>
				{/* <div className={styles.date}>October 2021 - April 2022</div>
				<fieldset className={styles.responsibilites}>
					<legend>
						<h3> Roles & responsibilites </h3>
					</legend>
					<ul>
						<li>
							My role was to  Monitoring of boiler operation & Performing regular maintenance of boiler. 
                           </li>
						<li>
						Monitoring Ammonia Refrigeration system as well as cold chain unit. 
						</li>
						<li>
						Responding to breakdown ,malfunctions and analysis
							</li>
							<li>
							Etp operation and monitoring 

							</li>
					
					</ul>
				</fieldset> */}
			</div>

			<br/>

			<div className={styles.container}>
				<div className={styles.position}>
				A.N College | Graduation{' '}
					<a href='/'>  Learning Accountant, Law, Financial & Taxation. </a>
				</div>
				<div className={styles.date}>June 2015 - Febuary 2019</div>
				{/* <fieldset className={styles.responsibilites}>
					<legend>
						<h3> Roles & responsibilites </h3>
					</legend>
					<ul>
						<li>
						Monitoring of utility operations 

							
						</li>
						<li>Carrying out of Predictive, Preventive maintenance & Breakdown maintenance, planning & execution. 
							
						</li>
						<li>
						Work as team member of the shift maintenance group & involve in the problem solving activities in plant.

						</li>
					
					</ul>
				</fieldset> */}
			</div>

		</div>
	);
};

export default Experiences;
