import * as React from 'react';

import { Team } from 'baseballcloud/types';

import { fetchTeams } from '../ducks/profile';
import { useRoutine } from './useRoutine';

export const useTeams = () => {
	const [teams, setTeams] = React.useState<{ [index: string]: Team }>({});
	const teamOptions = React.useMemo(
		() => Object.values(teams).map((team) => ({ label: team.name, value: team.name })),
		[teams],
	);
	const [loading, request] = useRoutine(
		{
			routine: fetchTeams,
			onSuccess: (data: any) => setTeams({ ...teams, ...data }),
		},
		[teams],
	);

	const requestMoreTeams = React.useCallback(
		(value: string) => {
			if (value) {
				request(value);
			}
		},
		[teams],
	);

	React.useEffect(() => {
		request('');
	}, []);

	return { teams, teamOptions, requestMoreTeams, teamsLoading: loading };
};
