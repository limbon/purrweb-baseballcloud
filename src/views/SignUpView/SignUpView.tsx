import * as React from 'react';
import { Link } from 'react-router-dom';

import { Route } from '../../utils/enums';

import SignUp from '../../components/Auth/SignUp/SignUp';

import styles from './SignUpView.scss';

const SignUpView: React.FC = () => {
	return (
		<div className={styles.view}>
			<div className={styles.formContainer}>
				<SignUp />
				<div className={styles.signIn}>
					Already registered? <Link to={Route.SignIn}>Sign In</Link>
				</div>
			</div>
		</div>
	);
};

export default SignUpView;
