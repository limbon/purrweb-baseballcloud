import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';

import styles from '../ProfileForm.scss';
import { PositionInput } from './common/PositionInput';

const Position1: React.FC<FieldRenderProps<any, HTMLElement>> = (props) => {
	const [focus, setFocus] = React.useState<boolean>(false);

	return (
		<div className={styles.input}>
			<PositionInput focusChange={setFocus} placeholder='Primary Position' {...props} />
			<label className={focus ? styles.label : ''}>Primary Position</label>
		</div>
	);
};

export default Position1;
