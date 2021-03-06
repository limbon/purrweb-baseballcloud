import * as React from 'react';
import { Field } from 'react-final-form';

import { numberInRange, validateAll, isNumber, notNull } from '../../../utils/validators';

import ProfileFormInput from '../Inputs/ProfileFormInput/ProfileFormInput';
import ProfileSelectInput from '../Inputs/ProfileSelectInput/ProfileSelectInput';

import styles from './ProfileFormSection.scss';

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

const handsOptions = [
	{ label: 'L', value: 'l' },
	{ label: 'R', value: 'r' },
];

const PersonalInfo: React.FC = () => {
	return (
		<div className={styles.personalInfo}>
			<div className={styles.heading}>
				<span>Personal Info</span>
			</div>
			<Field name='age' validate={validateAge}>
				{(props) => <ProfileFormInput label='Age' {...props} />}
			</Field>
			<div className={styles.height}>
				<Field name='feet' validate={validateFeet}>
					{(props) => <ProfileFormInput label='Feet' {...props} />}
				</Field>
				<Field name='inches' validate={validateInches}>
					{(props) => <ProfileFormInput label='Inches' {...props} />}
				</Field>
			</div>
			<Field name='weight' validate={validateWeight}>
				{(props) => <ProfileFormInput label='Weight' {...props} />}
			</Field>
			<div className={styles.hands}>
				<Field name='throws_hand'>
					{(props) => (
						<ProfileSelectInput
							{...props}
							label='Throws'
							options={handsOptions}
							searchable={false}
							getValue={(data) => data.value}
							value={
								handsOptions.find((h) => h.value === props.input.value) || handsOptions[0]
							}
							changeDeps={[]}
						/>
					)}
				</Field>
				<Field name='bats_hand'>
					{(props) => (
						<ProfileSelectInput
							{...props}
							label='Bats'
							options={handsOptions}
							searchable={false}
							getValue={(data) => data.value}
							value={
								handsOptions.find((h) => h.value === props.input.value) || handsOptions[0]
							}
							changeDeps={[]}
						/>
					)}
				</Field>
			</div>
		</div>
	);
};

export default PersonalInfo;
