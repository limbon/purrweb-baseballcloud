import * as React from 'react';
import { ProfileForm as ProfileFormData } from 'baseballcloud/types';
import AvatarUpload from './AvatarUpload';
import ProfileInfoForm from './ProfileInfoForm';

import styles from './ProfileForm.scss';

interface Props {
	data: ProfileFormData;
	onCancel: () => void;
}

const ProfileForm: React.FC<Props> = ({ data, onCancel }) => {
	const [formData, setFormData] = React.useState<ProfileFormData>(data);

	React.useEffect(() => {
		console.log(formData);
	}, [formData]);

	return (
		<div
			style={{ backgroundColor: 'white', height: '100%', padding: '16px', overflow: 'auto' }}
		>
			<AvatarUpload avatar={data.avatar} />
			<ProfileInfoForm data={data} />
			<div className={styles.buttons}>
				<button type='button' onClick={() => onCancel()} className={styles.cancel}>
					Cancel
				</button>
				<button className={styles.submit}>Save</button>
			</div>
		</div>
	);
};

export default ProfileForm;
