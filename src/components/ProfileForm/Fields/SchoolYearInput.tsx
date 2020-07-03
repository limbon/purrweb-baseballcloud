import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';

import { SchoolYear } from '../../../utils/enums';

import Select from '../../UI/Select/Select';

const schoolYears = Object.entries(SchoolYear).map(([label, value]) => ({ label, value }));

const SchoolYearInput: React.FC<FieldRenderProps<any, HTMLElement>> = ({ input }) => {
	const handleChange = React.useCallback((data: any) => {
		const e = { target: { value: data.value } };
		return input.onChange(e);
	}, []);

	return (
		<Select
			placeholder='School years'
			options={schoolYears}
			isSearchable={false}
			value={schoolYears.find((y) => y.value === input.value)}
			defaultValue={schoolYears[0]}
			onChange={handleChange}
		/>
	);
};

export default SchoolYearInput;
