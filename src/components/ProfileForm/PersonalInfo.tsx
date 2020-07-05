import * as React from 'react';
import { Field } from 'react-final-form';

import { numberInRange, validateAll, isNumber, notNull } from '../../utils/validators';

import WeightInput from './Fields/WeightInput';
import InchesInput from './Fields/InchesInput';
import FeetInput from './Fields/FeetInput';
import AgeInput from './Fields/AgeInput';
import ThrowsHand from './Fields/ThrowsHandInput';
import BatsHand from './Fields/BatsHandInput';

import styles from './ProfileForm.scss';

const validateAge = (value: string) => {
	return validateAll(value, notNull('Age'), isNumber('Age'), numberInRange('Age', 10, 30));
};
const validateFeet = (value: string) => {
	return validateAll(value, notNull('Feet'), isNumber('Feet'), numberInRange('Feet', 4, 7));
};
const validateInches = (value: string) => {
	return validateAll(value, numberInRange('Inches', 0, 12));
};
const validateWeight = (value: string) => {
	return validateAll(
		value,
		notNull('Weight'),
		isNumber('Weight'),
		numberInRange('Weight', 50, 350),
	);
};

const PersonalInfo: React.FC = () => {
	return (
		<div className={styles.personalInfo}>
			<div className={styles.heading}>
				<span>Personal Info</span>
			</div>
			<Field name='age' validate={validateAge} render={AgeInput} />
			<div className={styles.height}>
				<Field name='feet' validate={validateFeet} render={FeetInput} />
				<Field name='inches' validate={validateInches} render={InchesInput} />
			</div>
			<Field name='weight' validate={validateWeight} render={WeightInput} />
			<div className={styles.hands}>
				<Field name='throws_hand' render={ThrowsHand} />
				<Field name='bats_hand' render={BatsHand} />
			</div>
		</div>
	);
};

export default PersonalInfo;
