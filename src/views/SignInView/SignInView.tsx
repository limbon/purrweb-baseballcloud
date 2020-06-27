import * as React from 'react';
import { Link } from 'react-router-dom';

import { Route } from '../../utils/enums';

import SignIn from '../../components/Auth/SignIn/SignIn';

import styles from './SignInView.scss';

const SignInView: React.FC = () => {
	return (
		<div className={styles.view} style={{ flexDirection: 'column' }}>
			<div className={styles.formContainer}>
				<div className={styles.headings}>
					<div className={styles.heading1}>Welcome to BaseballCloud!</div>
					<div className={styles.heading2}>Sign into your account here:</div>
				</div>
				<div className={styles.form}>
					<SignIn />
				</div>
				<div className={styles.recoverPassword}>
					<Link to={Route.PasswordRecovery}>Forgotten Password?</Link>
				</div>
				<div className={styles.signUp}>
					Don't have an account? <Link to={Route.SignUp}>Sign Up</Link>
				</div>
			</div>
		</div>
	);
};

export default SignInView;
