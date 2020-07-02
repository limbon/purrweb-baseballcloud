import * as React from 'react';
import { Field } from 'react-final-form';

import { Profile } from 'baseballcloud/types';

import { ProfileFormField, Position } from '../../utils/enums';

import Input from '../UI/Input/Input';
import Select from '../UI/Select/Select';

import styles from './ProfileForm.scss';

interface Props {}

const positions = Object.entries(Position).map(([label, value]) => ({ label, value }));
const nullPositions = [{ label: '-', value: '' }, ...positions];

const UserInfo: React.FC<Props> = () => {
	return (
		<div className={styles.userInfo}>
			<div className={styles.name}>
				<Field name={ProfileFormField.FirstName}>
					{({ input }) => <Input {...input} placeholder='First Name' />}
				</Field>
				<Field name={ProfileFormField.LastName}>
					{({ input }) => <Input {...input} placeholder='Last Name' />}
				</Field>
			</div>
			<div className={styles.positions}>
				<Field name={ProfileFormField.Position1}>
					{({ input }) => (
						<Select
							maxMenuHeight={128}
							hideSelectedOptions={false}
							options={positions}
							placeholder='Primary Position'
							defaultValue={positions.find((p) => p.value === input.value) || positions[0]}
							onChange={(data: any) => {
								const e = { target: { value: data.value } };
								input.onChange(e);
							}}
						/>
					)}
				</Field>
				<Field name={ProfileFormField.Position2}>
					{({ input }) => (
						<Select
							maxMenuHeight={128}
							hideSelectedOptions={false}
							options={nullPositions}
							placeholder='Secondary Position'
							defaultValue={
								nullPositions.find((p) => p.value === input.value) || nullPositions[0]
							}
							onChange={(data: any) => {
								const e = { target: { value: data.label === '-' ? null : data.value } };
								input.onChange(e);
							}}
						/>
					)}
				</Field>
			</div>
		</div>
	);
};

export default UserInfo;
