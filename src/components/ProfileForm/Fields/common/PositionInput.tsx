import * as React from 'react';
import { FieldRenderProps, FieldInputProps } from 'react-final-form';
import { Position } from '../../../../utils/enums';
import { startCase } from 'lodash';

import Select from '../../../UI/Select/Select';

import styles from '../../ProfileForm.scss';

type Props = FieldRenderProps<any, HTMLElement> & {
	focusChange: (value: boolean) => void;
	placeholder: string;
};

const positions = Object.entries(Position).map(([label, value]) => ({
	label: startCase(label),
	value,
}));
const nullablePositions = [{ label: '-', value: '' }, ...positions];

const getPosition = (input: FieldInputProps<any, HTMLElement>) => {
	return positions.find((p) => p.value === input.value) || positions[0];
};

const getNullablePosition = (input: FieldInputProps<any, HTMLElement>) => {
	return nullablePositions.find((p) => p.value === input.value) || positions[0];
};

export const PositionInput: React.FC<Props> = ({ input, focusChange, placeholder }) => {
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
			maxMenuHeight={128}
			hideSelectedOptions={false}
			options={positions}
			placeholder={placeholder}
			defaultValue={getPosition(input)}
			onChange={handleChange}
		/>
	);
};

export const NullablePositionInput: React.FC<Props> = ({
	input,
	focusChange,
	placeholder,
}) => {
	const [focus, setFocus] = React.useState<boolean>(false);
	const handleChange = React.useCallback((data: any) => {
		const e = { target: { value: data.value || null } };
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
			maxMenuHeight={128}
			hideSelectedOptions={false}
			options={nullablePositions}
			placeholder={placeholder}
			defaultValue={getNullablePosition(input)}
			onChange={handleChange}
		/>
	);
};
