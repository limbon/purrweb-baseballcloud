import * as React from 'react';
import { FieldRenderProps, FieldInputProps } from 'react-final-form';

import { useTeams } from '../../../hooks/useTeams';

import Select from '../../UI/Select/Select';

import styles from '../ProfileForm.scss';

const getTeamsValue = (input: FieldInputProps<any, HTMLElement>) => {
	return input.value?.map((t: any) => ({ label: t.name, value: t.name }));
};

const TeamsInput: React.FC<FieldRenderProps<any, HTMLElement>> = ({ input }) => {
	const [focus, setFocus] = React.useState<boolean>(false);
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
		<div className={styles.input}>
			<Select
				className={`${focus ? styles.select : ''}`}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
				isMulti
				creatable
				options={teamOptions}
				value={getTeamsValue(input)}
				placeholder='Teams'
				onInputChange={requestMoreTeams}
				isLoading={teamsLoading}
				onChange={handleChange}
			/>
			<label className={focus ? styles.label : ''}>Teams</label>
		</div>
	);
};

export default TeamsInput;
