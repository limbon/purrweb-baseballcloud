import * as React from 'react';

import { ProfileForm } from 'baseballcloud/types';
import { Form, FormSpy } from 'react-final-form';

import UserInfo from './UserInfo';
import PersonalInfo from './PersonalInfo';
import SchoolInfo from './SchoolInfo';
import Biography from './Biography';

import styles from './ProfileForm.scss';

interface Props {
	data: ProfileForm;
	onValuesChange: (values: any) => void;
}

const ProfileInfoForm: React.FC<Props> = ({ data, onValuesChange }) => {
	const handleSubmit = React.useCallback(() => {}, []);

	return (
		<Form subscription={{ values: true }} onSubmit={handleSubmit} initialValues={data}>
			{() => {
				return (
					<form className={styles.profileInfoForm}>
						<UserInfo />
						<PersonalInfo />
						<SchoolInfo />
						<Biography />
						<FormSpy
							subscription={{ values: true }}
							onChange={(state) => onValuesChange(state.values)}
						/>
					</form>
				);
			}}
		</Form>
	);
};

export default ProfileInfoForm;
