import * as React from 'react';

import { Facility } from 'baseballcloud/types';

import { fetchFacilitiesPromise } from '../ducks/profile';
import { useRoutine } from './useRoutine';

export const useFacilities = () => {
	const [facilities, setFacilities] = React.useState<{ [index: string]: Facility }>({});
	const facilityOptions = React.useMemo(() => {
		return Object.values(facilities).map((facility) => ({
			label: facility.u_name,
			value: facility.u_name,
		}));
	}, [facilities]);

	const [loading, request] = useRoutine(fetchFacilitiesPromise, []);

	React.useEffect(() => {
		request('').then(setFacilities);
	}, []);

	return { facilities, facilityOptions };
};
