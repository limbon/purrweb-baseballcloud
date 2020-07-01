import * as React from 'react';

import styles from './ProfileForm.scss';
import { Field } from 'react-final-form';
import Input from '../UI/Input/Input';
import { ProfileFormField, Hand } from '../../utils/enums';
import Select from '../UI/Select/Select';

const hands = Object.values(Hand).map((value) => ({ label: value.toUpperCase(), value }));

const PersonalInfo: React.FC = () => {
	return (
		<div className={styles.personalInfo}>
			<div className={styles.heading}>
				<span>Personal Info</span>
			</div>
			<Field name={ProfileFormField.Age}>
				{({ input }) => <Input {...input} placeholder='Age' />}
			</Field>
			<div className={styles.height}>
				<Field name={ProfileFormField.Feet}>
					{({ input }) => <Input {...input} placeholder='Feet' />}
				</Field>
				<Field name={ProfileFormField.Inches}>
					{({ input }) => <Input {...input} placeholder='Inches' />}
				</Field>
			</div>
			<Field name={ProfileFormField.Weight}>
				{({ input }) => <Input {...input} placeholder='Weight' />}
			</Field>
			<div className={styles.hands}>
				<Field name={ProfileFormField.ThrowsHand}>
					{({ input }) => (
						<Select
							hideSelectedOptions={false}
							options={hands}
							defaultValue={hands.find((h) => h.value === input.value) || hands[0]}
							onChange={(data: any) => {
								const e = { target: { value: data.value } };
								input.onChange(e);
							}}
						/>
					)}
				</Field>
				<Field name={ProfileFormField.BatsHand}>
					{({ input }) => (
						<Select
							hideSelectedOptions={false}
							options={hands}
							defaultValue={hands.find((h) => h.value === input.value) || hands[0]}
							onChange={(data: any) => {
								const e = { target: { value: data.value } };
								input.onChange(e);
							}}
						/>
					)}
				</Field>
			</div>
		</div>
	);
};

export default PersonalInfo;
