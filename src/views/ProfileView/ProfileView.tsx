import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { ProfileState } from 'baseballcloud/types';
import { ApiService } from '../../services/ApiService';
import { ServiceID } from '../../utils/enums';

import Profile from '../../components/Profile/Profile';

import { useService } from '../../hooks/useService';
import { selectProfile } from '../../utils/selectors';

import styles from './ProfileView.scss';
import { requestProfile } from '../../ducks/profile';

const ProfileView: React.FC = () => {
	const [profile, setProfile] = React.useState<ProfileState>(null);
	const params = useParams<{ id: string }>();
	const currentProfile = useSelector(selectProfile);
	const api = useService<ApiService>(ServiceID.ApiService);
	const history = useHistory();
	const dispatch = useDispatch();

	React.useEffect(() => {
		if (params.id && !isNaN(parseInt(params.id))) {
			(async () => {
				try {
					const userProfile = await api.requestProfileById(params.id);
					setProfile(userProfile);
				} catch (error) {
					console.error(error);
					// Should be either 404 or 500 or idk
					history.goBack();
				}
			})();
		} else if (!currentProfile) {
			dispatch(requestProfile());
		} else {
			setProfile(currentProfile);
		}
	}, [currentProfile]);

	return (
		<div className={styles.view}>
			<div className={styles.profile}>{profile ? <Profile data={profile} /> : null}</div>
		</div>
	);
};

export default ProfileView;
