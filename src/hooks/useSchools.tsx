import * as React from 'react';

import { School } from 'baseballcloud/types';

import { fetchSchools } from '../ducks/profile';
import { useRoutine } from './useRoutine';

export const useSchools = () => {
	const [schools, setSchools] = React.useState<{ [index: string]: School }>({});
	const schoolOptions = React.useMemo(
		() => Object.values(schools).map((school) => ({ label: school.name, value: school.name })),
		[schools],
	);
	const [loading, request] = useRoutine(
		{
			routine: fetchSchools,
			onSuccess: (data: any) => setSchools({ ...schools, ...data }),
		},
		[schools],
	);

	const requestMoreSchools = React.useCallback(
		(value: string) => {
			if (value) {
				request(value);
			}
		},
		[schools],
	);

	React.useEffect(() => {
		request('');
	}, []);

	return {
		schools,
		schoolOptions,
		requestMoreSchools,
		schoolLoading: loading,
	};
};
