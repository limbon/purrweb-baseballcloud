import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';

import Input from '../../UI/Input/Input';

import styles from '../ProfileForm.scss';

const InchesInput: React.FC<FieldRenderProps<any, HTMLElement>> = ({ input }) => {
	return (
		<div className={styles.input}>
			<Input {...input} placeholder='Inches' />
			<label>Inches</label>
		</div>
	);
};

export default InchesInput;
