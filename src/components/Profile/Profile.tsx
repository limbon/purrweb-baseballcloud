import * as React from 'react';
import { startCase } from 'lodash';
import { useSelector } from 'react-redux';

import { Profile as ProfileData } from 'baseballcloud/types';

import { selectActiveProfile } from '../../utils/selectors';

import UserInfo from './Sections/UserInfo';

import EditIcon from '../../assets/icons/edit.svg';
import LikeIcon from '../../assets/icons/like.svg';

import ProfileForm from '../ProfileForm/ProfileForm';
import PersonalInfo from './Sections/PersonalInfo';

import styles from './Profile.scss';
import SchoolInfo from './Sections/SchoolInfo';
import BiographyInfo from './Sections/BiographyInfo';

interface Props {
	data: ProfileData;
}

const ProfileComponent: React.FC<Props> = ({ data }) => {
	return (
		<div className={styles.profile}>
			<UserInfo data={data} />
			<PersonalInfo data={data} />
			<SchoolInfo data={data} />
			<BiographyInfo data={data} />
		</div>
	);
};

const Profile: React.FC<Props> = ({ data }) => {
	const [edit, setEdit] = React.useState<boolean>(false);
	const activeProfile = useSelector(selectActiveProfile);

	const profileForm = React.useMemo(() => {
		return {
			id: data.id,
			avatar: data?.avatar,
			first_name: data?.first_name,
			last_name: data?.last_name,
			position: data?.position,
			position2: data?.position2,
			throws_hand: data.throws_hand,
			bats_hand: data?.bats_hand,
			biography: data?.biography,
			school_year: data.school_year,
			feet: data.feet?.toString(),
			inches: data.inches?.toString(),
			weight: data.weight?.toString(),
			age: data.age?.toString(),
			school: data?.school,
			teams: data?.teams,
			facilities: data?.facilities,
		};
	}, [data]);

	if (edit || !profileForm.first_name) {
		return (
			<ProfileForm
				onCancel={() => setEdit(false)}
				onSubmit={() => setEdit(false)}
				data={profileForm}
			/>
		);
	} else {
		return (
			<div className={styles.profileContainer}>
				{data.id === activeProfile?.id ? (
					<button onClick={() => setEdit(true)}>
						<EditIcon />
					</button>
				) : (
					<button>
						<LikeIcon />
					</button>
				)}
				<ProfileComponent data={data} />
			</div>
		);
	}
};

export default Profile;
