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
	const initialFormData = React.useMemo(() => {
		return {
			id: data.id,
			avatar: data.avatar,
			first_name: data.first_name,
			last_name: data.last_name,
			position: data.position,
			position2: data.position2,
			throws_hand: data.throws_hand,
			bats_hand: data.bats_hand,
			biography: data.biography,
			school_year: data.school_year,
			feet: data.feet,
			inches: data.inches,
			weight: data.weight,
			age: data.age,
			school: data.school,
			teams: data.teams,
			facilities: data.facilities,
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
					age: parseInt(values.age),
					feet: parseInt(values.feet),
					inches: parseInt(values.inches),
					weight: parseInt(values.weight),
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
