import * as React from 'react';
import { upperFirst } from 'lodash';

import RolePicker from '../../components/UI/RolePicker/RolePicker';

import styles from './SignUpView.scss';

const SignUpView: React.FC = () => {
	return (
		<div className={styles.view}>
			<RolePicker
				onChange={(e) => console.log(e.target.value)}
				formatText={(role) => `Sign Up as ${upperFirst(role)}`}
			/>
		</div>
	);
};

export default SignUpView;
