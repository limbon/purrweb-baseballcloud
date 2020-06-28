import * as React from 'react';
import { upperFirst } from 'lodash';
import { Form, Field } from 'react-final-form';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faCheck } from '@fortawesome/free-solid-svg-icons';

import { AuthField, Role, Route } from '../../../utils/enums';

import { minLength, isEmail, equalFields } from '../../../utils/validators';

import Input from '../../UI/Input/Input';
import RolePicker from '../../UI/RolePicker/RolePicker';

import styles from '../Auth.scss';

interface RoleMap {
	[index: string]: string;
}

// Maybe it shouldn't be hardcoded?
const roleText: RoleMap = {
	[Role.Player]:
		'Players have their own profile within the system and plan on having data collected.',
	[Role.Scout]:
		'Coaches and scouts can view players in the system but do not have their own profile.',
};

const roleName: RoleMap = {
	[Role.Player]: 'Players',
	[Role.Scout]: 'Scouts',
};

const SignUp: React.FC = () => {
	const handleSubmit = React.useCallback((data: any) => {
		console.log(data);
	}, []);

	return (
		<Form
			onSubmit={handleSubmit}
			validate={equalFields(
				AuthField.Password,
				AuthField.ConfirmPassword,
				'Passwords must be equal',
			)}
			initialValues={{ role: Role.Player }}
		>
			{({ handleSubmit, hasValidationErrors, errors }) => (
				<form className={styles.form} onSubmit={handleSubmit}>
					<Field name={AuthField.Role}>
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
					<Field name={AuthField.Email} validate={isEmail}>
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
					<Field name={AuthField.Password} validate={minLength(8)}>
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
					<Field name={AuthField.ConfirmPassword} validate={minLength(8)}>
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
						By clicking Sign Up, you agree to our <Link to={Route.TOS}>Terms of Service</Link>{' '}
						and <Link to={Route.Privacy}>Privacy Policy</Link>.
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
