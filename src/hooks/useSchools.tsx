import * as React from 'react';

import { School } from 'baseballcloud/types';

import { fetchSchoolsPromise } from '../ducks/profile';
import { useRoutine } from './useRoutine';

export const useSchools = () => {
	const [schools, setSchools] = React.useState<{ [index: string]: School }>({});
	const schoolOptions = React.useMemo(
		() => Object.values(schools).map((school) => ({ label: school.name, value: school.name })),
		[schools],
	);
	const [loading, request] = useRoutine(fetchSchoolsPromise, [schools]);

	const requestMoreSchools = React.useCallback(
		(value: string) => {
			if (value) {
				request(value).then(setSchools);
			}
		},
		[schools],
	);

	React.useEffect(() => {
		request('').then(setSchools);
	}, []);

	return {
		schools,
		schoolOptions,
		requestMoreSchools,
		schoolLoading: loading,
	};
};
