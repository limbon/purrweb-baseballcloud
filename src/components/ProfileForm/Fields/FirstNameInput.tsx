import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';

import styles from '../ProfileForm.scss';

import Input from '../../UI/Input/Input';

const FirstNameInput: React.FC<FieldRenderProps<any, HTMLElement>> = ({ input }) => {
	return (
		<div className={styles.input}>
			<Input {...input} placeholder='First Name' />
			<label>First Name</label>
		</div>
	);
};

export default FirstNameInput;
