import * as React from 'react';
import { FieldRenderProps, FieldInputProps } from 'react-final-form';
import { Position } from '../../../utils/enums';

import Select from '../../UI/Select/Select';

const positions = Object.entries(Position).map(([label, value]) => ({ label, value }));
const nullablePositions = [{ label: '-', value: '' }, ...positions];

const getPosition = (input: FieldInputProps<any, HTMLElement>) => {
	return positions.find((p) => p.value === input.value) || positions[0];
};

const getNullablePosition = (input: FieldInputProps<any, HTMLElement>) => {
	return nullablePositions.find((p) => p.value === input.value) || positions[0];
};

export const PositionInput: React.FC<FieldRenderProps<any, HTMLElement>> = ({ input }) => {
	const handleChange = React.useCallback((data: any) => {
		const e = { target: { value: data.value } };
		input.onChange(e);
	}, []);

	return (
		<Select
			maxMenuHeight={128}
			hideSelectedOptions={false}
			options={positions}
			placeholder='Primary Position'
			defaultValue={getPosition(input)}
			onChange={handleChange}
		/>
	);
};

export const NullablePositionInput: React.FC<FieldRenderProps<any, HTMLElement>> = ({
	input,
}) => {
	const handleChange = React.useCallback((data: any) => {
		const e = { target: { value: data.value || null } };
		input.onChange(e);
	}, []);

	return (
		<Select
			maxMenuHeight={128}
			hideSelectedOptions={false}
			options={nullablePositions}
			placeholder='Primary Position'
			defaultValue={getNullablePosition(input)}
			onChange={handleChange}
		/>
	);
};
