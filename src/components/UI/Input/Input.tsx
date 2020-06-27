import * as React from 'react';

import styles from './Input.scss';

interface Props
	extends React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {}

const Input = (props: Props) => {
	const { className } = props;
	return <input {...props} className={`${styles.input} ${className}`} />;
};

export default Input;
