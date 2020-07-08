import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';

import { fetchProfileById } from '../../ducks/profile';
import { selectProfileState, selectCredentials } from '../../utils/selectors';

import Profile from '../../components/Profile/Profile';
import Loading from '../../components/Loading/Loading';

import styles from './ProfileView.scss';

const ProfileView: React.FC = () => {
	const { profiles } = useSelector(selectProfileState);
	const credentials = useSelector(selectCredentials);
	const params = useParams<{ id: string }>();
	const dispatch = useDispatch();

	React.useEffect(() => {
		if (credentials) {
			if (!profiles[params.id]) {
				if (!isNaN(parseInt(params.id))) {
					dispatch(fetchProfileById.request(params.id));
				}
			}
		}
	}, [params.id]);

	if (!credentials) {
		return <Redirect to='/' />;
	}

	if (isNaN(parseInt(params.id))) {
		return <Redirect to='/' />;
	}

	if (profiles[params.id]) {
		return (
			<div className={styles.view}>
				<div className={styles.profile}>
					<Profile data={profiles[params.id]} />
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

export default ProfileView;
