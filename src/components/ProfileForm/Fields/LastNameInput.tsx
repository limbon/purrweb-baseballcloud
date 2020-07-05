import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';

import Input from '../../UI/Input/Input';

import styles from '../ProfileForm.scss';

const LastNameInput: React.FC<FieldRenderProps<any, HTMLElement>> = ({ input }) => {
	return (
		<div className={styles.input}>
			<Input {...input} placeholder='Last Name' />
			<label>Last Name</label>
		</div>
	);
};

export default LastNameInput;
