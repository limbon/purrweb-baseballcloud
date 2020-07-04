import * as React from 'react';
import { Field } from 'react-final-form';

import HandInput from './Fields/HandInput';
import WeightInput from './Fields/WeightInput';
import InchesInput from './Fields/InchesInput';
import FeetInput from './Fields/FeetInput';
import AgeInput from './Fields/AgeInput';

import styles from './ProfileForm.scss';

const PersonalInfo: React.FC = () => {
	return (
		<div className={styles.personalInfo}>
			<div className={styles.heading}>
				<span>Personal Info</span>
			</div>
			<Field name='age' render={AgeInput} />
			<div className={styles.height}>
				<Field name='feet' render={FeetInput} />
				<Field name='inches' render={InchesInput} />
			</div>
			<Field name='weight' render={WeightInput} />
			<div className={styles.hands}>
				<Field name='throws_hand' render={HandInput} />
				<Field name='bats_hand' render={HandInput} />
			</div>
		</div>
	);
};

export default PersonalInfo;
