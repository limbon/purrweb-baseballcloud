import * as React from 'react';
import { Field } from 'react-final-form';

import { validateAll, notNull } from '../../utils/validators';

import FirstNameInput from './Fields/FirstNameInput';
import LastNameInput from './Fields/LastNameInput';
import { PositionInput, NullablePositionInput } from './Fields/PositionInput';

import styles from './ProfileForm.scss';

interface Props {}

const validateFirstName = (value: string) => {
	return validateAll(value, notNull('First Name'));
};

const validateLastName = (value: string) => {
	return validateAll(value, notNull('Last Name'));
};

const UserInfo: React.FC<Props> = () => {
	return (
		<div className={styles.userInfo}>
			<div className={styles.name}>
				<Field name='first_name' validate={validateFirstName} render={FirstNameInput} />
				<Field name='last_name' validate={validateLastName} render={LastNameInput} />
			</div>
			<div className={styles.positions}>
				<Field name='position' render={PositionInput} />
				<Field name='position2' render={NullablePositionInput} />
			</div>
		</div>
	);
};

export default UserInfo;
