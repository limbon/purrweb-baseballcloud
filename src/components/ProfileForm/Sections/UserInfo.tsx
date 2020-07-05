import * as React from 'react';
import { Field } from 'react-final-form';
import { startCase } from 'lodash';

import { Position } from '../../../utils/enums';

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

const UserInfo: React.FC<Props> = () => {
	const positions = React.useMemo(() => {
		return Object.entries(Position).map(([label, value]) => ({
			label: startCase(label),
			value,
		}));
	}, []);
	const nullablePositions = React.useMemo(() => {
		return [{ label: '-', value: '' }, ...positions];
	}, [positions]);

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
							label='Primary Position'
							options={positions}
							searchable={false}
							getValue={(data) => data.value}
							defaultValue={
								positions.find((p) => p.value === props.input.value) || positions[0]
							}
							changeDeps={[]}
							{...props}
							c
						/>
					)}
				</Field>
				<Field name='position2'>
					{(props) => (
						<ProfileSelectInput
							label='Secondary Position'
							options={nullablePositions}
							searchable={false}
							getValue={(data) => data.value || null}
							defaultValue={
								nullablePositions.find((p) => p.value === props.input.value) || positions[0]
							}
							changeDeps={[]}
							{...props}
						/>
					)}
				</Field>
			</div>
		</div>
	);
};

export default UserInfo;
