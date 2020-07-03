import * as React from 'react';
import { Field } from 'react-final-form';

import { ProfileFormField } from '../../utils/enums';

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
			<Field name={ProfileFormField.Age} render={AgeInput} />
			<div className={styles.height}>
				<Field name={ProfileFormField.Feet} render={FeetInput} />
				<Field name={ProfileFormField.Inches} render={InchesInput} />
			</div>
			<Field name={ProfileFormField.Weight} render={WeightInput} />
			<div className={styles.hands}>
				<Field name={ProfileFormField.ThrowsHand} render={HandInput} />
				<Field name={ProfileFormField.BatsHand} render={HandInput} />
			</div>
		</div>
	);
};

export default PersonalInfo;
