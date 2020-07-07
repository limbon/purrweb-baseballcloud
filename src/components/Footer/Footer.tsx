import * as React from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.scss';

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.legal}>
				<span>© 2018 BaseballCloud</span>
				<Link to='/tos'>Terms of Service</Link>
				<Link to='/privacy'>Privacy Policy</Link>
			</div>
			<div className={styles.socials}>
				<a href='https://baseballcloud.blog' target='_blank'>
					Blog
				</a>
				<a href='http://twitter.com/baseballcloudus' target='_blank'>
					Twitter
				</a>
				<a href='http://www.instagram.com/baseballcloudus/' target='_blank'>
					Instagram
				</a>
				<a href='http://www.facebook.com/BaseballCloudUS/' target='_blank'>
					Facebook
				</a>
			</div>
		</footer>
	);
};

export default Footer;
