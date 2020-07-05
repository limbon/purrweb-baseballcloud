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
	return (
		<div
			style={{ backgroundColor: 'white', height: '100%', padding: '16px', overflow: 'auto' }}
		>
			<AvatarUpload onUpload={setAvatar} avatar={avatar} />
			<ProfileInfoForm onSubmit={onSubmit} onCancel={onCancel} avatar={avatar} data={data} />
		</div>
	);
};

export default ProfileForm;
