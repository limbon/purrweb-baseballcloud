import * as React from 'react';
import { Profile } from 'baseballcloud/types';
import AvatarUpload from './AvatarUpload';
import ProfileInfoForm from './ProfileInfoForm';

interface Props {
	data: Profile;
}

const ProfileForm: React.FC<Props> = ({ data }) => {
	return (
		<div style={{ backgroundColor: 'white', height: '100%', padding: '16px' }}>
			<AvatarUpload avatar={data.avatar} />
			<ProfileInfoForm data={data} />
		</div>
	);
};

export default ProfileForm;
