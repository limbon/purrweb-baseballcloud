import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { requestProfileById } from '../../ducks/profile';
import { selectProfile } from '../../utils/selectors';

import Profile from '../../components/Profile/Profile';

import styles from './ProfileView.scss';
import ProfileForm from '../../components/ProfileForm/ProfileForm';

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
				dispatch(requestProfileById(params.id));
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

	if (activeProfile) {
		return (
			<div className={styles.view}>
				<div className={styles.profile}>
					{/* <Profile data={profiles[activeProfile]} /> */}
					<ProfileForm data={profiles[activeProfile]} />
				</div>
			</div>
		);
	}

	return null;
};

export default ProfileView;
