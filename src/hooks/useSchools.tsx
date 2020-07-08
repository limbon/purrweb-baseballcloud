import * as React from 'react';

import { School } from 'baseballcloud/types';

import { $fetchSchools } from '../ducks/profile/promisifiedActions';
import { useAsyncAction } from './useAsyncAction';

export const useSchools = () => {
	const [schools, setSchools] = React.useState<{ [index: string]: School }>({});
	const schoolOptions = React.useMemo(
		() => Object.values(schools).map((school) => ({ label: school.name, value: school.name })),
		[schools],
	);
	const [loading, error, request] = useAsyncAction($fetchSchools, [schools]);

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
