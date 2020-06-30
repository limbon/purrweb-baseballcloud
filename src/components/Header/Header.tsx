import * as React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Route } from '../../utils/enums';

import { selectProfile, selectActiveProfile } from '../../utils/selectors';

import Logo from '../../assets/icons/logo.svg';
import DefaultAvatar from '../../assets/images/default-avatar.png';
import Dropdown from '../UI/Dropdown/Dropdown';

import styles from './Header.scss';
import Select from '../UI/Select/Select';

const Header: React.FC = () => {
	const profile = useSelector(selectActiveProfile);

	return (
		<header className={styles.header}>
			<Link className={styles.homeLink} to={Route.Home}>
				<Logo />
			</Link>
			<div className={styles.navigation}>
				<Link to={Route.Leaderboard}>Leaderboard</Link>
				<Link to={Route.Network}>Network</Link>
				<Select
					searchable
					onChange={(e) => console.log(e.target.value)}
					options={['Foo', 'Bar', 'Baz']}
				/>
				{profile && (
					<div className={styles.profile}>
						<img src={profile.avatar || DefaultAvatar} />
						<Dropdown
							title={`${profile?.first_name} ${profile?.last_name}`}
							options={[
								<Link to={Route.Profile}>My Profile</Link>,
								<Link to='/logout'>Logout</Link>,
							]}
						/>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
