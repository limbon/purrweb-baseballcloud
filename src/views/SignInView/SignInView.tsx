import * as React from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { selectCredentials } from '../../utils/selectors';

import SignIn from '../../components/Auth/SignIn/SignIn';

import styles from './SignInView.scss';

const SignInView: React.FC = () => {
	const credentials = useSelector(selectCredentials);

	if (credentials) {
		return <Redirect to='/profile' />;
	}

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
					<Link to='/recovery'>Forgotten Password?</Link>
				</div>
				<div className={styles.signUp}>
					Don't have an account? <Link to='/sign-up'>Sign Up</Link>
				</div>
			</div>
		</div>
	);
};

export default SignInView;
