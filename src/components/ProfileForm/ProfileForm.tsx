import * as React from 'react';
import { ProfileForm as ProfileFormData } from 'baseballcloud/types';

import AvatarUpload from './Forms/AvatarUpload';
import ProfileInfoForm from './Forms/ProfileInfoForm';

import styles from './ProfileForm.scss';

interface Props {
	data: ProfileFormData;
	onCancel: () => void;
	onSubmit: () => void;
}

const ProfileForm: React.FC<Props> = ({ data, onCancel, onSubmit }) => {
	const [avatar, setAvatar] = React.useState<string | null>(data.avatar);
	return (
		<div className={styles.profileForm}>
			<AvatarUpload onUpload={setAvatar} avatar={avatar} />
			<ProfileInfoForm onSubmit={onSubmit} onCancel={onCancel} avatar={avatar} data={data} />
		</div>
	);
};

export default ProfileForm;
