import * as React from 'react';
import { Form, Field } from 'react-final-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

import { AuthField } from '../../../utils/enums';

import Input from '../../UI/Input/Input';

import styles from '../Auth.scss';

const SignIn: React.FC = () => {
	const handleSubmit = React.useCallback((data: any) => {
		console.log(data);
	}, []);

	return (
		<Form onSubmit={handleSubmit}>
			{({ handleSubmit }) => (
				<form className={styles.form} onSubmit={handleSubmit}>
					<Field name={AuthField.Email}>
						{({ input }) => (
							<div className={styles.field}>
								<FontAwesomeIcon icon={faUser} />
								<Input {...input} type='email' className={styles.input} placeholder='Email' />
							</div>
						)}
					</Field>
					<Field name={AuthField.Password}>
						{({ input }) => (
							<div className={styles.field}>
								<FontAwesomeIcon icon={faLock} />
								<Input
									{...input}
									type='password'
									className={styles.input}
									placeholder='Password'
								/>
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
