import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';

import Input from '../../UI/Input/Input';

import styles from '../ProfileForm.scss';

const WeightInput: React.FC<FieldRenderProps<any, HTMLElement>> = ({ input }) => {
	return (
		<div className={styles.input}>
			<Input {...input} placeholder='Weight' />
			<label>Weight</label>
		</div>
	);
};

export default WeightInput;
