import * as React from 'react';
import { Link } from 'react-router-dom';
import { Route } from '../../utils/enums';

import Logo from '../../assets/icons/logo.svg';

import styles from './Header.scss';
import Dropdown from '../UI/Dropdown/Dropdown';

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<Link className={styles.homeLink} to={Route.Home}>
				<Logo />
			</Link>
			<div style={{ marginLeft: 'auto' }}>
				<Dropdown title='Dropdown' options={['Lorem ipsum dolor sit amet', 'Bar', 'Baz']} />
			</div>
		</header>
	);
};

export default Header;
