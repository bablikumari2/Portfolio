import React from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import WindowSize from '../../Utils/WindowSize';
import styles from './About.module.css';

const About = () => {
	const { newTheme } = React.useContext(ThemeContext);
	const [width] = WindowSize();
	const img =
		width < 650
			? 'https://media-exp1.licdn.com/dms/image/C4E03AQFjS-U02TmDag/profile-displayphoto-shrink_400_400/0/1644759737873?e=1652918400&v=beta&t=iMZJgmUTJpKtbp3HzHeEWh6Dzv_LkCd_qrL6WR0_K3U' // my Picture
			: 'https://i.pinimg.com/originals/f5/b0/45/f5b045627b6c125e500fc02f42d79763.jpg';
	return (
		<div
			className={styles.container}
			style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
		>
			<div className={styles.first}>
				<img src={"https://i.pinimg.com/originals/f5/b0/45/f5b045627b6c125e500fc02f42d79763.jpg"} alt='' />
			</div>
			<div className={styles.second}>
				<h1
					style={{ color: `${newTheme.title}` }}
					className={styles.heading}
				>
					About Me
				</h1>
				<div className={styles.borderBottom} />
				<p
					style={{ color: `${newTheme.para}` }}
					className={styles.aboutMe}
				>
					Hello! My name is Babli Kumari and I enjoy creating things that
					live on the internet.
					<br /> Fast Forwarding to today, I built a number of web
					applications and 3 major projects. Learned a great deal
					about teamwork, leadership, and communication. After months
					of rigorous training, here I am
					<span style={{ color: `#00a0a0` }}>
						{' '}
						looking for an opportunity as a full stack web developer
					</span>
					.
				</p>
			</div>
		</div>
	);
};

export default About;
