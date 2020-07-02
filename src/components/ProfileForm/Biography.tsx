import * as React from 'react';
import { Field } from 'react-final-form';

import { ProfileFormField } from '../../utils/enums';

import styles from './ProfileForm.scss';

const Biography: React.FC = () => {
	return (
		<div className={styles.bio}>
			<div className={styles.heading}>
				<span>About</span>
			</div>
			<Field name={ProfileFormField.Biography}>
				{({ input }) => (
					<textarea placeholder='Describe yourself in a few words' {...input}></textarea>
				)}
			</Field>
		</div>
	);
};

export default Biography;
