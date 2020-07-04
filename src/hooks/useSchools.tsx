import * as React from 'react';
import { useDispatch } from 'react-redux';
import { promisifyRoutine } from 'redux-saga-routines';

import { School } from 'baseballcloud/types';

import { fetchSchools } from '../ducks/profile';

export const useSchools = () => {
	const [schools, setSchools] = React.useState<{ [index: string]: School }>({});
	const [loading, setLoading] = React.useState<boolean>(false);
	const schoolOptions = React.useMemo(
		() => Object.values(schools).map((school) => ({ label: school.name, value: school.name })),
		[schools],
	);
	const dispatch = useDispatch();

	const requestMoreSchools = React.useCallback(
		(value: string) => {
			if (value) {
				setLoading(true);
				promisifyRoutine(fetchSchools)(value, dispatch).then((data) => {
					setSchools({ ...schools, ...data });
					setLoading(false);
				});
			}
		},
		[schools],
	);

	React.useEffect(() => {
		setLoading(true);
		promisifyRoutine(fetchSchools)('', dispatch).then((data) => {
			setSchools(data);
			setLoading(false);
		});
	}, []);

	return {
		schools,
		schoolOptions,
		requestMoreSchools,
		schoolLoading: loading,
	};
};
