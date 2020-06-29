import * as React from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { Route } from '../../utils/enums';

import { selectUser } from '../../utils/selectors';

import SignUp from '../../components/Auth/SignUp/SignUp';

import styles from './SignUpView.scss';

const SignUpView: React.FC = () => {
	const user = useSelector(selectUser);

	if (user) {
		return <Redirect to={Route.Profile} />;
	}

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
