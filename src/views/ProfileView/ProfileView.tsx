import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';

import { Route } from '../../utils/enums';
import { fetchProfileById } from '../../ducks/profile';
import { selectProfileState } from '../../utils/selectors';

import Profile from '../../components/Profile/Profile';

import styles from './ProfileView.scss';

const ProfileView: React.FC = () => {
	const { profiles } = useSelector(selectProfileState);
	const params = useParams<{ id: string }>();
	const dispatch = useDispatch();

	React.useEffect(() => {
		if (!profiles[params.id]) {
			if (!isNaN(parseInt(params.id))) {
				dispatch(fetchProfileById(params.id));
			}
		}
	}, []);

	if (isNaN(parseInt(params.id))) {
		return <Redirect to={Route.Home} />;
	}

	if (profiles[params.id]) {
		return (
			<div className={styles.view}>
				<div className={styles.profile}>
					<Profile data={profiles[params.id]} />
				</div>
			</div>
		);
	} else {
		return null;
	}
};

export default ProfileView;
