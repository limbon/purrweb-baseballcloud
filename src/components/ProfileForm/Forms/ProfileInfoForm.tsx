import * as React from 'react';
import { Form } from 'react-final-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { ProfileForm } from 'baseballcloud/types';

import { useRoutine } from '../../../hooks/useRoutine';
import { updateProfilePromise } from '../../../ducks/profile';

import UserInfo from '../Sections/UserInfo';
import PersonalInfo from '../Sections/PersonalInfo';
import SchoolInfo from '../Sections/SchoolInfo';
import Biography from '../Sections/Biography';

import styles from './Form.scss';

interface Props {
	data: Partial<ProfileForm>;
	avatar: string | null;
	onCancel: () => void;
	onSubmit: () => void;
}

const ProfileInfoForm: React.FC<Props> = ({ data, onCancel, onSubmit, avatar }) => {
	const [loading, submit] = useRoutine(updateProfilePromise, []);

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
			submit(_form).then(onSubmit);
		},
		[avatar],
	);

	return (
		<Form onSubmit={handleSubmit} initialValues={data}>
			{({ handleSubmit, form }) => (
				<form onSubmit={handleSubmit} className={styles.profileInfoForm}>
					<UserInfo />
					<PersonalInfo />
					<SchoolInfo />
					<Biography />
					{form.getState().hasValidationErrors && (
						<div className={styles.errors}>
							{Object.entries(form.getState().errors).map(([key, error]) => (
								<span className={styles.error} key={key}>
									* {error}
								</span>
							))}
						</div>
					)}
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
