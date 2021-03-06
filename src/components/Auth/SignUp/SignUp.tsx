import * as React from 'react';
import { useDispatch } from 'react-redux';
import { upperFirst } from 'lodash';
import { Form, Field } from 'react-final-form';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faCheck } from '@fortawesome/free-solid-svg-icons';

import { signUp } from '../../../ducks/user';
import { minLength, isEmail, equalFields } from '../../../utils/validators';

import Input from '../../UI/Input/Input';
import RolePicker from '../../UI/RolePicker/RolePicker';

import styles from '../Auth.scss';

interface RoleMap {
	[index: string]: string;
}

// Maybe it shouldn't be hardcoded?
const roleText: RoleMap = {
	player:
		'Players have their own profile within the system and plan on having data collected.',
	scout:
		'Coaches and scouts can view players in the system but do not have their own profile.',
};

const roleName: RoleMap = {
	player: 'Players',
	scout: 'Scouts',
};

const SignUp: React.FC = () => {
	const dispatch = useDispatch();
	const handleSubmit = React.useCallback((data: any) => {
		dispatch(signUp(data));
	}, []);

	return (
		<Form
			onSubmit={handleSubmit}
			validate={equalFields('password', 'password_confirmation', 'Passwords must be equal')}
			initialValues={{ role: 'player' }}
		>
			{({ handleSubmit, errors }) => (
				<form className={styles.form} onSubmit={handleSubmit}>
					<Field name='role'>
						{({ input }) => (
							<div className={styles.roles}>
								<RolePicker
									onChange={input.onChange}
									value={input.value}
									formatText={(role) => `Sign Up as ${upperFirst(role)}`}
								/>
								<div className={styles.roleDescription}>
									<div className={styles.roleName}>{roleName[input.value]}</div>
									<p className={styles.roleDescriptionText}>{roleText[input.value]}</p>
								</div>
							</div>
						)}
					</Field>
					<Field name='email' validate={isEmail}>
						{({ input, meta }) => (
							<div className={styles.field}>
								<div className={styles.inputContainer}>
									<FontAwesomeIcon icon={faUser} />
									<Input
										{...input}
										className={styles.input}
										type='email'
										placeholder='Email'
									/>
								</div>
								{meta.touched && !meta.pristine && meta.error && (
									<span className={styles.error}>{meta.error}</span>
								)}
							</div>
						)}
					</Field>
					<Field name='password' validate={minLength(8)}>
						{({ input, meta }) => (
							<div className={styles.field}>
								<div className={styles.inputContainer}>
									<FontAwesomeIcon icon={faLock} />
									<Input
										{...input}
										className={styles.input}
										type='password'
										placeholder='Password'
									/>
								</div>
								{meta.touched && !meta.pristine && meta.error && (
									<span className={styles.error}>{meta.error}</span>
								)}
							</div>
						)}
					</Field>
					<Field name='password_confirmation' validate={minLength(8)}>
						{({ input, meta }) => (
							<div className={styles.field}>
								<div className={styles.inputContainer}>
									<FontAwesomeIcon icon={faCheck} />
									<Input
										{...input}
										className={styles.input}
										type='password'
										placeholder='Confirm Password'
									/>
								</div>
								{meta.touched && !meta.pristine && meta.error && (
									<span className={styles.error}>{meta.error}</span>
								)}
								{!meta.error && !meta.pristine && errors.inequalFields && (
									<span className={styles.error}>{errors.inequalFields}</span>
								)}
							</div>
						)}
					</Field>
					<p className={styles.legal}>
						By clicking Sign Up, you agree to our <Link to='/tos'>Terms of Service</Link> and{' '}
						<Link to='/privacy'>Privacy Policy</Link>.
					</p>
					<button type='submit' className={styles.submit}>
						Sign Up
					</button>
				</form>
			)}
		</Form>
	);
};

export default SignUp;
