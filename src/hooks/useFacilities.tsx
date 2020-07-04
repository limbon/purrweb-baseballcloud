import * as React from 'react';
import { useDispatch } from 'react-redux';
import { promisifyRoutine } from 'redux-saga-routines';

import { Facility } from 'baseballcloud/types';

import { fetchFacilities } from '../ducks/profile';

export const useFacilities = () => {
	const [facilities, setFacilities] = React.useState<{ [index: string]: Facility }>({});
	const facilityOptions = React.useMemo(
		() =>
			Object.values(facilities).map((facility) => ({
				label: facility.u_name,
				value: facility.u_name,
			})),
		[facilities],
	);
	const dispatch = useDispatch();

	React.useEffect(() => {
		promisifyRoutine(fetchFacilities)('', dispatch).then((data) => setFacilities(data));
	}, []);

	return { facilities, facilityOptions };
};
