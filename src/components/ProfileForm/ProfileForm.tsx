import * as React from 'react';
import { ProfileForm as ProfileFormData, Profile } from 'baseballcloud/types';

import AvatarUpload from './AvatarUpload';
import ProfileInfoForm from './ProfileInfoForm';

import styles from './ProfileForm.scss';

interface Props {
	data: ProfileFormData;
	onCancel: () => void;
	onSubmit: () => void;
}

const ProfileForm: React.FC<Props> = ({ data, onCancel, onSubmit }) => {
	const [avatar, setAvatar] = React.useState<string | null>(data.avatar);
	const formData = React.useMemo(() => {
		return {
			id: data.id,
			first_name: data.first_name,
			last_name: data.last_name,
			position: data.position,
			position2: data.position2,
			throws_hand: data.throws_hand,
			bats_hand: data.bats_hand,
			biography: data.biography,
			school_year: data.school_year,
			feet: data.feet,
			inches: data.inches,
			weight: data.weight,
			age: data.age,
			school: data.school,
			teams: data.teams,
			facilities: data.facilities,
		};
	}, []);

	return (
		<div
			style={{ backgroundColor: 'white', height: '100%', padding: '16px', overflow: 'auto' }}
		>
			<AvatarUpload onUpload={setAvatar} avatar={avatar} />
			<ProfileInfoForm
				onSubmit={onSubmit}
				onCancel={onCancel}
				avatar={avatar}
				data={formData}
			/>
		</div>
	);
};

export default ProfileForm;
