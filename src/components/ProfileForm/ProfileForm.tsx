import * as React from 'react';
import { Profile } from 'baseballcloud/types';
import AvatarUpload from './AvatarUpload';
import ProfileInfoForm from './ProfileInfoForm';

interface Props {
	data: Profile;
	onCancel: () => void;
}

const ProfileForm: React.FC<Props> = ({ data, onCancel }) => {
	return (
		<div style={{ backgroundColor: 'white', height: '100%', padding: '16px', overflow: 'auto' }}>
			<AvatarUpload avatar={data.avatar} />
			<ProfileInfoForm data={data} onCancel={onCancel} />
		</div>
	);
};

export default ProfileForm;
