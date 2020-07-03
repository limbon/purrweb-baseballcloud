import * as React from 'react';

import { Team } from 'baseballcloud/types';
import { useDispatch } from 'react-redux';
import { requestTeams } from '../ducks/profile/asyncActions';

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
				setLoading(true);
				(dispatch(requestTeams(value)) as any).then((data: any) => {
					setTeams({ ...teams, ...data });
					setLoading(false);
				});
			}
		},
		[teams],
	);

	React.useEffect(() => {
		setLoading(true);
		(dispatch(requestTeams('')) as any).then((data: any) => {
			setTeams(data);
			setLoading(false);
		});
	}, []);

	return { teams, teamOptions, requestMoreTeams, teamsLoading: loading };
};
