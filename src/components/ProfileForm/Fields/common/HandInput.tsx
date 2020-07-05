import * as React from 'react';
import { FieldRenderProps, FieldInputProps } from 'react-final-form';

import { Hand } from '../../../../utils/enums';

import Select from '../../../UI/Select/Select';

import styles from '../../ProfileForm.scss';

type Props = FieldRenderProps<any, HTMLElement> & {
	focusChange: (value: boolean) => void;
};

const hands = Object.values(Hand).map((value) => ({ label: value.toUpperCase(), value }));

const getHandsValue = (input: FieldInputProps<any, HTMLElement>) => {
	return hands.find((h) => h.value === input.value) || hands[0];
};

const HandInput: React.FC<Props> = ({ input, focusChange }) => {
	const [focus, setFocus] = React.useState<boolean>(false);
	const handleChange = React.useCallback((data: any) => {
		const e = { target: { value: data.value } };
		input.onChange(e);
	}, []);

	React.useEffect(() => {
		focusChange(focus);
	}, [focus]);

	return (
		<Select
			className={`${focus ? styles.select : ''}`}
			onFocus={() => setFocus(true)}
			onBlur={() => setFocus(false)}
			hideSelectedOptions={false}
			options={hands}
			isSearchable={false}
			defaultValue={getHandsValue(input)}
			onChange={handleChange}
		/>
	);
};

export default HandInput;
