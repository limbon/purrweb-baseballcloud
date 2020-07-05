import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';

import Input from '../../UI/Input/Input';

import styles from '../ProfileForm.scss';

const FeetInput: React.FC<FieldRenderProps<any, HTMLElement>> = ({ input }) => {
	return (
		<div className={styles.input}>
			<Input {...input} placeholder='Feet' />
			<label>Feet</label>
		</div>
	);
};

export default FeetInput;
