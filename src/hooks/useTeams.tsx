import * as React from 'react';

import { Team } from 'baseballcloud/types';

import { $fetchTeams } from '../ducks/profile/promisifiedActions';

import { useAsyncAction } from './useAsyncAction';

export const useTeams = () => {
	const [teams, setTeams] = React.useState<{ [index: string]: Team }>({});
	const teamOptions = React.useMemo(
		() => Object.values(teams).map((team) => ({ label: team.name, value: team.name })),
		[teams],
	);
	const [loading, error, request] = useAsyncAction($fetchTeams, [teams]);

	const requestMoreTeams = React.useCallback(
		(value: string) => {
			if (value) {
				request(value).then(setTeams);
			}
		},
		[teams],
	);

	React.useEffect(() => {
		request('').then(setTeams);
	}, []);

	return { teams, teamOptions, requestMoreTeams, teamsLoading: loading };
};
