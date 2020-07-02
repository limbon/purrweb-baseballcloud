import * as React from 'react';

import { Profile, Team } from 'baseballcloud/types';
import { Form, Field } from 'react-final-form';

import { Position, ProfileFormField } from '../../utils/enums';

import UserInfo from './UserInfo';
import PersonalInfo from './PersonalInfo';
import SchoolInfo from './SchoolInfo';

import styles from './ProfileForm.scss';
import Biography from './Biography';
import { useDispatch } from 'react-redux';
import { requestTeams } from '../../ducks/profile/asyncActions';

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
			}}
		>
			{({ handleSubmit }) => (
				<form className={styles.profileInfoForm} onSubmit={handleSubmit}>
					<UserInfo />
					<PersonalInfo />
					<SchoolInfo />
					<Biography />
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
