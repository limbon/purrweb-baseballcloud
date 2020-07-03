import * as React from 'react';
import { ProfileForm as ProfileFormData } from 'baseballcloud/types';

import AvatarUpload from './AvatarUpload';
import ProfileInfoForm from './ProfileInfoForm';

import styles from './ProfileForm.scss';
import { ProfileFormField } from '../../utils/enums';

interface Props {
	data: ProfileFormData;
	onCancel: () => void;
}

const ProfileForm: React.FC<Props> = ({ data, onCancel }) => {
	const initialFormData = React.useMemo(() => {
		return {
			id: data.id,
			[ProfileFormField.Avatar]: data.avatar,
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
	const [formData, setFormData] = React.useState(initialFormData);

	const handleSubmit = React.useCallback(() => {
		console.log(formData);
	}, [formData]);

	const updateFormData = React.useCallback(
		(values) => {
			return setTimeout(() => {
				const data = {
					...values,
					[ProfileFormField.Age]: parseInt(values.age),
					[ProfileFormField.Feet]: parseInt(values.feet),
					[ProfileFormField.Inches]: parseInt(values.inches),
					[ProfileFormField.Weight]: parseInt(values.weight),
				};
				setFormData(data);
			});
		},
		[formData],
	);

	return (
		<div
			style={{ backgroundColor: 'white', height: '100%', padding: '16px', overflow: 'auto' }}
		>
			<AvatarUpload avatar={formData.avatar} />
			<ProfileInfoForm onValuesChange={updateFormData} data={formData} />
			<div className={styles.buttons}>
				<button type='button' onClick={() => onCancel()} className={styles.cancel}>
					Cancel
				</button>
				<button onClick={handleSubmit} className={styles.submit}>
					Save
				</button>
			</div>
		</div>
	);
};

export default ProfileForm;
