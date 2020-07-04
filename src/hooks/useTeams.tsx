import * as React from 'react';
import { useDispatch } from 'react-redux';
import { promisifyRoutine } from 'redux-saga-routines';

import { Team } from 'baseballcloud/types';

import { fetchTeams } from '../ducks/profile';

export const useTeams = () => {
	const [teams, setTeams] = React.useState<{ [index: string]: Team }>({});
	const [loading, setLoading] = React.useState<boolean>(false);
	const teamOptions = React.useMemo(
		() => Object.values(teams).map((team) => ({ label: team.name, value: team.name })),
		[teams],
	);
	const dispatch = useDispatch();

	const requestMoreTeams = React.useCallback(
		(value: string) => {
			if (value) {
				promisifyRoutine(fetchTeams)(value, dispatch).then((data) => {
					setTeams({ ...teams, ...data });
					setLoading(false);
				});
			}
		},
		[teams],
	);

	React.useEffect(() => {
		setLoading(true);
		promisifyRoutine(fetchTeams)('', dispatch).then((data) => {
			setTeams(data);
			setLoading(false);
		});
	}, []);

	return { teams, teamOptions, requestMoreTeams, teamsLoading: loading };
};
