import * as React from 'react';
import { FieldRenderProps, FieldInputProps } from 'react-final-form';

import { useTeams } from '../../../hooks/useTeams';

import Select from '../../UI/Select/Select';

const getTeamsValue = (input: FieldInputProps<any, HTMLElement>) => {
	return input.value?.map((t: any) => ({ label: t.name, value: t.name }));
};

const TeamsInput: React.FC<FieldRenderProps<any, HTMLElement>> = ({ input }) => {
	const { teams, teamsLoading, teamOptions, requestMoreTeams } = useTeams();

	const handleChange = React.useCallback(
		(data: any) => {
			const _teams = data?.map((d: any) => teams[d.value] || { id: d.value, name: d.value });
			const e = { target: { value: _teams ?? [] } };
			return input.onChange(e);
		},
		[teams],
	);

	return (
		<Select
			isMulti
			creatable
			options={teamOptions}
			value={getTeamsValue(input)}
			placeholder='Teams'
			onInputChange={requestMoreTeams}
			isLoading={teamsLoading}
			onChange={handleChange}
		/>
	);
};

export default TeamsInput;
