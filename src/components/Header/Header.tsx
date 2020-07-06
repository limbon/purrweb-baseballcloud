import * as React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../../ducks/user';

import { Route } from '../../utils/enums';

import { selectActiveProfile, selectUser } from '../../utils/selectors';

import Logo from '../../assets/icons/logo.svg';
import DefaultAvatar from '../../assets/images/default-avatar.png';
import Dropdown from '../UI/Dropdown/Dropdown';

import styles from './Header.scss';

const Header: React.FC = () => {
	const profile = useSelector(selectActiveProfile);
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	const handleSignOut = React.useCallback(() => {
		dispatch(signOut());
	}, []);

	return (
		<header className={styles.header}>
			<Link className={styles.homeLink} to={Route.Home}>
				<Logo />
			</Link>
			{profile && (
				<div className={styles.navigation}>
					<Link to={Route.Leaderboard}>Leaderboard</Link>
					<Link to={Route.Network}>Network</Link>
					<div className={styles.profile}>
						<img src={profile.avatar || DefaultAvatar} />
						<Dropdown
							title={
								profile.first_name ? `${profile!.first_name} ${profile!.last_name}` : user?.email
							}
							options={[
								<Link to={Route.Profile}>My Profile</Link>,
								<Link to='#' onClick={handleSignOut}>
									Logout
								</Link>,
							]}
						/>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
