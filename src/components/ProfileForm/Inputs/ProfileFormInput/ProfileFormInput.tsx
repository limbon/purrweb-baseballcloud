import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';

import Input from '../../../UI/Input/Input';

import styles from './ProfileFormInput.scss';

type Props = FieldRenderProps<any, HTMLElement> & {
	label: string;
	textarea?: boolean;
};

const ProfileFormInput: React.FC<Props> = ({ input, label, textarea }) => {
	return (
		<div className={styles.input}>
			{textarea ? (
				<textarea {...input} placeholder={label}></textarea>
			) : (
				<Input {...input} placeholder={label} />
			)}
			<label>{label}</label>
		</div>
	);
};

export default ProfileFormInput;
