import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';

import styles from '../ProfileForm.scss';

const BiographyInput: React.FC<FieldRenderProps<any, HTMLElement>> = ({ input }) => {
	return (
		<div className={styles.input}>
			<textarea placeholder='Describe yourself in a few words' {...input}></textarea>
			<label>Describe yourself in a few words</label>
		</div>
	);
};

export default BiographyInput;
