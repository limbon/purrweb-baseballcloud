import * as React from 'react';
import { Team } from 'baseballcloud/types';
import { useDispatch } from 'react-redux';
import { requestTeams } from '../ducks/profile/asyncActions';

export const useTeams = () => {
	const [teams, setTeams] = React.useState<{ [index: string]: Team }>({});
	const teamOptions = React.useMemo(
		() => Object.values(teams).map((team) => ({ label: team.name, value: team.name })),
		[teams],
	);
	const dispatch = useDispatch();

	React.useEffect(() => {
		(dispatch(requestTeams()) as any).then((data: any) => setTeams(data));
	}, []);

	return { teams, teamOptions };
};
