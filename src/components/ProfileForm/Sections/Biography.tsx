import * as React from 'react';
import { Field } from 'react-final-form';

import ProfileFormInput from '../Inputs/ProfileFormInput/ProfileFormInput';

import styles from './ProfileFormSection.scss';

const Biography: React.FC = () => {
	return (
		<div className={styles.bio}>
			<div className={styles.heading}>
				<span>About</span>
			</div>
			<Field name='biography'>
				{(props) => (
					<ProfileFormInput label='Describe yourself in a few words' textarea {...props} />
				)}
			</Field>
		</div>
	);
};

export default Biography;
