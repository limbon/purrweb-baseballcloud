import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { requestProfile, requestProfileById } from '../../ducks/profile';
import { selectProfile } from '../../utils/selectors';

import Profile from '../../components/Profile/Profile';

import styles from './ProfileView.scss';

const ProfileView: React.FC = () => {
	const currentProfile = useSelector(selectProfile);
	const params = useParams<{ id: string }>();
	const history = useHistory();
	const dispatch = useDispatch();

	React.useEffect(() => {
		if (params.id) {
			if (isNaN(parseInt(params.id))) {
				history.goBack();
			} else {
				dispatch(requestProfileById(params.id));
			}
		} else {
			dispatch(requestProfile());
		}
	}, []);

	return (
		<div className={styles.view}>
			<div className={styles.profile}>
				{currentProfile ? <Profile data={currentProfile} /> : null}
			</div>
		</div>
	);
};

export default ProfileView;
