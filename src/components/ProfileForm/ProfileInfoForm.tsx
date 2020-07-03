import * as React from 'react';

import { ProfileForm } from 'baseballcloud/types';
import { Form } from 'react-final-form';

import { ProfileFormField } from '../../utils/enums';

import UserInfo from './UserInfo';
import PersonalInfo from './PersonalInfo';
import SchoolInfo from './SchoolInfo';
import Biography from './Biography';

import styles from './ProfileForm.scss';

interface Props {
	data: ProfileForm;
}

const ProfileInfoForm: React.FC<Props> = ({ data }) => {
	const handleSubmit = React.useCallback(() => {}, []);
	const initialValues = React.useMemo(() => {
		return {
			[ProfileFormField.FirstName]: data.first_name,
			[ProfileFormField.LastName]: data.last_name,
			[ProfileFormField.Position1]: data.position,
			[ProfileFormField.Position2]: data.position2,
			[ProfileFormField.Age]: data.age,
			[ProfileFormField.Feet]: data.feet,
			[ProfileFormField.Inches]: data.inches,
			[ProfileFormField.Weight]: data.weight,
			[ProfileFormField.ThrowsHand]: data.throws_hand,
			[ProfileFormField.BatsHand]: data.bats_hand,
			[ProfileFormField.SchoolYear]: data.school_year,
			[ProfileFormField.Teams]: data.teams,
			[ProfileFormField.School]: data.school,
			[ProfileFormField.Facilites]: data.facilities,
			[ProfileFormField.Biography]: data.biography,
		};
	}, [data]);

	return (
		<Form
			subscription={{ values: true }}
			onSubmit={handleSubmit}
			initialValues={initialValues}
		>
			{() => {
				return (
					<form className={styles.profileInfoForm}>
						<UserInfo />
						<PersonalInfo />
						<SchoolInfo />
						<Biography />
					</form>
				);
			}}
		</Form>
	);
};

export default ProfileInfoForm;
