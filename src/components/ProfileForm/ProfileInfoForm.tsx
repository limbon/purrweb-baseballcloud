import * as React from 'react';

import { ProfileForm } from 'baseballcloud/types';
import { Form, FormSpy, useFormState } from 'react-final-form';

import UserInfo from './UserInfo';
import PersonalInfo from './PersonalInfo';
import SchoolInfo from './SchoolInfo';
import Biography from './Biography';

import styles from './ProfileForm.scss';
import { useDispatch } from 'react-redux';
import { requestUpdateProfile } from '../../ducks/profile';

interface Props {
	data: ProfileForm;
	onCancel: () => void;
}

const ProfileInfoForm: React.FC<Props> = ({ data, onCancel }) => {
	const dispatch = useDispatch();
	const handleSubmit = React.useCallback((form: ProfileForm) => {
		const _form: any = {
			...form,
			age: parseInt(form.age),
			feet: parseInt(form.feet),
			inches: parseInt(form.inches),
			weight: parseInt(form.weight),
		};

		dispatch(requestUpdateProfile(_form));
	}, []);

	return (
		<Form onSubmit={handleSubmit} initialValues={data}>
			{({ handleSubmit }) => (
				<form onSubmit={handleSubmit} className={styles.profileInfoForm}>
					<UserInfo />
					<PersonalInfo />
					<SchoolInfo />
					<Biography />
					<div className={styles.buttons}>
						<button type='button' onClick={() => onCancel()} className={styles.cancel}>
							Cancel
						</button>
						<button onClick={handleSubmit} className={styles.submit}>
							Save
						</button>
					</div>
				</form>
			)}
		</Form>
	);
};

export default ProfileInfoForm;
