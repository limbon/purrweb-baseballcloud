import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

import { signIn } from '../../../ducks/user';
import { SignInFormData } from 'baseballcloud/types';

import { isEmail } from '../../../utils/validators';

import Input from '../../UI/Input/Input';

import styles from '../Auth.scss';

const SignIn: React.FC = () => {
	const dispatch = useDispatch();
	const handleSubmit = React.useCallback((data: SignInFormData) => {
		dispatch(signIn(data));
	}, []);

	return (
		<Form onSubmit={handleSubmit}>
			{({ handleSubmit }) => (
				<form className={styles.form} onSubmit={handleSubmit}>
					<Field name='email' validate={isEmail}>
						{({ input, meta }) => (
							<div className={styles.field}>
								<div className={styles.inputContainer}>
									<FontAwesomeIcon icon={faUser} />
									<Input {...input} type='email' className={styles.input} placeholder='Email' />
								</div>
								{meta.touched && !meta.pristine && meta.error && (
									<span className={styles.error}>{meta.error}</span>
								)}
							</div>
						)}
					</Field>
					<Field name='password'>
						{({ input }) => (
							<div className={styles.field}>
								<div className={styles.inputContainer}>
									<FontAwesomeIcon icon={faLock} />
									<Input
										{...input}
										type='password'
										className={styles.input}
										placeholder='Password'
									/>
								</div>
							</div>
						)}
					</Field>
					<button className={styles.submit}>Sign In</button>
				</form>
			)}
		</Form>
	);
};

export default SignIn;
