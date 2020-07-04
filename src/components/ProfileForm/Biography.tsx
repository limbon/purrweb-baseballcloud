import * as React from 'react';
import { Field } from 'react-final-form';

import BiographyInput from './Fields/BiographyInput';

import styles from './ProfileForm.scss';

const Biography: React.FC = () => {
	return (
		<div className={styles.bio}>
			<div className={styles.heading}>
				<span>About</span>
			</div>
			<Field name='biography' render={BiographyInput} />
		</div>
	);
};

export default Biography;
