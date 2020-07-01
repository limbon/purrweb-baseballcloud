import * as React from 'react';

import { Profile } from 'baseballcloud/types';
import { Form } from 'react-final-form';

import { Position, ProfileFormField } from '../../utils/enums';

import UserInfo from './UserInfo';

import styles from './ProfileForm.scss';

interface Props {
	data: Profile;
}

const ProfileInfoForm: React.FC<Props> = ({ data }) => {
	const handleSubmit = React.useCallback((data: any) => {
		console.log(data);
	}, []);

	return (
		<Form
			onSubmit={handleSubmit}
			initialValues={{
				[ProfileFormField.FirstName]: data.first_name,
				[ProfileFormField.LastName]: data.last_name,
				[ProfileFormField.Position1]: data.position,
				[ProfileFormField.Position2]: data.position2,
			}}
		>
			{({ handleSubmit }) => (
				<form className={styles.profileInfoForm} onSubmit={handleSubmit}>
					<UserInfo />
					<div className={styles.buttons}>
						<button className={styles.cancel}>Cancel</button>
						<button className={styles.submit}>Save</button>
					</div>
				</form>
			)}
		</Form>
	);
};

export default ProfileInfoForm;
