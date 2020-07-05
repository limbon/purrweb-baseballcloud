import * as React from 'react';
import HandInput from './common/HandInput';
import { FieldRenderProps } from 'react-final-form';

import styles from '../ProfileForm.scss';

const BatsHand: React.FC<FieldRenderProps<any, HTMLElement>> = (props) => {
	const [focus, setFocus] = React.useState<boolean>();

	return (
		<div className={styles.input}>
			<HandInput focusChange={setFocus} {...props} />
			<label className={focus ? styles.label : ''}>Bats</label>
		</div>
	);
};

export default BatsHand;
