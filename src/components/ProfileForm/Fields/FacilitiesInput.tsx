import * as React from 'react';
import { FieldRenderProps, FieldInputProps } from 'react-final-form';

import { Facility } from 'baseballcloud/types';

import { useFacilities } from '../../../hooks/useFacilities';

import Select from '../../UI/Select/Select';

const getFacilityValue = (input: FieldInputProps<any, HTMLElement>) => {
	if (input.value) {
		return input.value.map((f: Facility) => ({ label: f.u_name, value: f.u_name }));
	} else {
		return [];
	}
};

const FacilitesInput: React.FC<FieldRenderProps<any, HTMLElement>> = ({ input }) => {
	const { facilities, facilityOptions } = useFacilities();

	const handleChange = React.useCallback(
		(data: any) => {
			const _facilities = data?.map((d: any) => facilities[d.value]) || [];
			const e = { target: { value: _facilities } };
			return input.onChange(e);
		},
		[facilities],
	);

	return (
		<Select
			isMulti
			options={facilityOptions}
			defaultValue={getFacilityValue(input)}
			placeholder='Facility'
			onChange={handleChange}
		/>
	);
};

export default FacilitesInput;
