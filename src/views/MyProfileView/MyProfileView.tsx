import * as React from 'react';
import { useSelector } from 'react-redux';

import Profile from '../../components/Profile/Profile';

import styles from './MyProfileView.scss';
import { selectActiveProfile } from '../../utils/selectors';

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
	} else {
		return null;
	}
};

export default MyProfileView;
