import * as React from 'react';
import { Field } from 'react-final-form';

import FirstNameInput from './Fields/FirstNameInput';
import LastNameInput from './Fields/LastNameInput';
import { PositionInput, NullablePositionInput } from './Fields/PositionInput';

import styles from './ProfileForm.scss';

interface Props {}

const UserInfo: React.FC<Props> = () => {
	return (
		<div className={styles.userInfo}>
			<div className={styles.name}>
				<Field name='first_name' render={FirstNameInput} />
				<Field name='last_name' render={LastNameInput} />
			</div>
			<div className={styles.positions}>
				<Field name='position' render={PositionInput} />
				<Field name='position2' render={NullablePositionInput} />
			</div>
		</div>
	);
};

export default UserInfo;
