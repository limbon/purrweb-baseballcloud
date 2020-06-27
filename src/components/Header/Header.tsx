import * as React from 'react';
import { Link } from 'react-router-dom';
import { Route } from '../../utils/enums';

import Logo from '../../assets/icons/logo.svg';

import styles from './Header.scss';

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<Link className={styles.homeLink} to={Route.Home}>
				<Logo />
			</Link>
		</header>
	);
};

export default Header;
