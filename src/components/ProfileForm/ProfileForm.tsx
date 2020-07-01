import * as React from 'react';
import { Profile } from 'baseballcloud/types';
import AvatarUpload from './AvatarUpload';

interface Props {
	data: Profile;
}

const ProfileForm: React.FC<Props> = ({ data }) => {
	return (
		<div style={{ backgroundColor: 'white', height: '100%' }}>
			<AvatarUpload avatar={data.avatar} />
		</div>
	);
};

export default ProfileForm;
