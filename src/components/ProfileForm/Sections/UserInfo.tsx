import * as React from 'react';
import { Field } from 'react-final-form';
import { startCase } from 'lodash';

import { validateAll, notNull } from '../../../utils/validators';

import ProfileFormInput from '../Inputs/ProfileFormInput/ProfileFormInput';
import ProfileSelectInput from '../Inputs/ProfileSelectInput/ProfileSelectInput';

import styles from './ProfileFormSection.scss';

interface Props {}

const validateFirstName = (value: string) => {
	return validateAll(value, notNull('First Name'));
};

const validateLastName = (value: string) => {
	return validateAll(value, notNull('Last Name'));
};

const positionOptions = [
	{ label: 'Catcher', value: 'catcher' },
	{ label: 'Pitcher', value: 'pitcher' },
	{ label: 'First Base', value: 'first_base' },
	{ label: 'Second Base', value: 'second_base' },
	{ label: 'Third Base', value: 'third_base' },
	{ label: 'Shortstop', value: 'shortstop' },
	{ label: 'Outfield', value: 'outfield' },
];

const nullablePositionOptions = [{ label: '-' }, ...positionOptions];

const UserInfo: React.FC<Props> = () => {
	return (
		<div className={styles.userInfo}>
			<div className={styles.name}>
				<Field name='first_name' validate={validateFirstName}>
					{(props) => <ProfileFormInput label='First Name' {...props} />}
				</Field>
				<Field name='last_name' validate={validateLastName}>
					{(props) => <ProfileFormInput label='Last Name' {...props} />}
				</Field>
			</div>
			<div className={styles.positions}>
				<Field name='position'>
					{(props) => (
						<ProfileSelectInput
							{...props}
							label='Primary Position'
							options={positionOptions}
							searchable={false}
							getValue={(data) => data.value}
							value={positionOptions.find((p) => p.value === props.input.value)}
							defaultValue={positionOptions[0]}
							changeDeps={[]}
						/>
					)}
				</Field>
				<Field name='position2'>
					{(props) => (
						<ProfileSelectInput
							{...props}
							label='Secondary Position'
							options={nullablePositionOptions as any}
							searchable={false}
							getValue={(data) => data.value || null}
							value={
								nullablePositionOptions.find((p: any) => p.value === props.input.value) as any
							}
							defaultValue={nullablePositionOptions[0] as any}
							changeDeps={[]}
						/>
					)}
				</Field>
			</div>
		</div>
	);
};

export default UserInfo;
