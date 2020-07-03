import * as React from 'react';
import { Field } from 'react-final-form';

import { ProfileFormField } from '../../utils/enums';

import FirstNameInput from './Fields/FirstNameInput';
import LastNameInput from './Fields/LastNameInput';
import { PositionInput, NullablePositionInput } from './Fields/PositionInput';

import styles from './ProfileForm.scss';

interface Props {}

const UserInfo: React.FC<Props> = () => {
	return (
		<div className={styles.userInfo}>
			<div className={styles.name}>
				<Field name={ProfileFormField.FirstName} render={FirstNameInput} />
				<Field name={ProfileFormField.LastName} render={LastNameInput} />
			</div>
			<div className={styles.positions}>
				<Field name={ProfileFormField.Position1} render={PositionInput} />
				<Field name={ProfileFormField.Position2} render={NullablePositionInput} />
			</div>
		</div>
	);
};

export default UserInfo;
