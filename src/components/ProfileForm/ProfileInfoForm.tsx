import * as React from 'react';
import { Form } from 'react-final-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { ProfileForm } from 'baseballcloud/types';

import { useRoutine } from '../../hooks/useRoutine';
import { updateProfile } from '../../ducks/profile';

import UserInfo from './UserInfo';
import PersonalInfo from './PersonalInfo';
import SchoolInfo from './SchoolInfo';
import Biography from './Biography';

import styles from './ProfileForm.scss';

interface Props {
	data: Partial<ProfileForm>;
	avatar: string | null;
	onCancel: () => void;
	onSubmit: () => void;
}

const ProfileInfoForm: React.FC<Props> = ({ data, onCancel, onSubmit, avatar }) => {
	const [loading, submit] = useRoutine({ routine: updateProfile, onSuccess: onSubmit }, []);

	const handleSubmit = React.useCallback(
		(form) => {
			const _form: ProfileForm = {
				...form,
				avatar,
				age: parseInt(form.age),
				feet: parseInt(form.feet),
				inches: parseInt(form.inches),
				weight: parseInt(form.weight),
			};
			submit(_form);
		},
		[avatar],
	);

	return (
		<Form onSubmit={handleSubmit} initialValues={data}>
			{({ handleSubmit }) => (
				<form onSubmit={handleSubmit} className={styles.profileInfoForm}>
					<UserInfo />
					<PersonalInfo />
					<SchoolInfo />
					<Biography />
					<div className={styles.buttons}>
						<button
							disabled={loading}
							type='button'
							onClick={onCancel}
							className={styles.cancel}
						>
							Cancel
						</button>
						<button disabled={loading} className={styles.submit}>
							{loading ? <FontAwesomeIcon icon={faSpinner} spin /> : 'Save'}
						</button>
					</div>
				</form>
			)}
		</Form>
	);
};

export default ProfileInfoForm;
