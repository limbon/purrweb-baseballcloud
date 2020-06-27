import * as React from 'react';

import styles from './SignInView.scss';
import Input from '../../components/UI/Input/Input';

const SignInView: React.FC = () => {
	return (
		<div className={styles.view} style={{ flexDirection: 'column' }}>
			<h1>Sign In</h1>
			<div style={{ display: 'grid', gap: '1rem' }}>
				<Input />
				<Input />
				<Input />
			</div>
		</div>
	);
};

export default SignInView;
