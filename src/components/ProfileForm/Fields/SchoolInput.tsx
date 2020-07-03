import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';

import { useSchools } from '../../../hooks/useSchools';

import Select from '../../UI/Select/Select';

const SchoolInput: React.FC<FieldRenderProps<any, HTMLElement>> = ({ input }) => {
	const { schools, schoolOptions, requestMoreSchools, schoolLoading } = useSchools();

	const handleChange = React.useCallback(
		(data: any) => {
			const school = schools[data?.value] || { id: data.value, name: data.value };
			const e = { target: { value: school } };
			return input.onChange(e);
		},
		[schools],
	);

	return (
		<Select
			creatable
			options={schoolOptions}
			value={{ label: input.value.name, value: input.value.name }}
			placeholder='School'
			onInputChange={requestMoreSchools}
			isLoading={schoolLoading}
			onChange={handleChange}
		/>
	);
};

export default SchoolInput;
