import * as React from 'react';
import { useSelector } from 'react-redux';

import { selectActiveProfile, selectProfileState } from '../../utils/selectors';

import Profile from '../../components/Profile/Profile';
import Loading from '../../components/Loading/Loading';

import styles from './MyProfileView.scss';

const MyProfileView: React.FC = () => {
	const profile = useSelector(selectActiveProfile);

	if (profile) {
		return (
			<div className={styles.view}>
				<div className={styles.profile}>
					<Profile data={profile} />
				</div>
			</div>
		);
	}

	return (
		<div className={styles.loading}>
			<Loading size='10x' />
		</div>
	);
};

export default MyProfileView;
