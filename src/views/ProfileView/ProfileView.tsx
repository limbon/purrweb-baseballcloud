import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { fetchProfileById } from '../../ducks/profile';
import { selectProfile } from '../../utils/selectors';

import Profile from '../../components/Profile/Profile';

import styles from './ProfileView.scss';

const ProfileView: React.FC = () => {
	const { activeProfile, profiles } = useSelector(selectProfile);
	const params = useParams<{ id: string }>();
	const history = useHistory();
	const dispatch = useDispatch();

	React.useEffect(() => {
		if (params.id && !profiles[params.id]) {
			if (isNaN(parseInt(params.id))) {
				history.goBack();
			} else {
				dispatch(fetchProfileById(params.id));
			}
		}
	}, []);

	if (params.id && profiles[params.id]) {
		return (
			<div className={styles.view}>
				<div className={styles.profile}>
					<Profile data={profiles[params.id]} />
				</div>
			</div>
		);
	}

	if (activeProfile && profiles[activeProfile]) {
		return (
			<div className={styles.view}>
				<div className={styles.profile}>
					<Profile data={profiles[activeProfile]} />
				</div>
			</div>
		);
	}

	return null;
};

export default ProfileView;
