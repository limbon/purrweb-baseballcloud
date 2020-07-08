import * as React from 'react';

import { Facility } from 'baseballcloud/types';

import { $fetchFacilities } from '../ducks/profile/promisifiedActions';
import { useAsyncAction } from './useAsyncAction';

export const useFacilities = () => {
	const [facilities, setFacilities] = React.useState<{ [index: string]: Facility }>({});
	const facilityOptions = React.useMemo(() => {
		return Object.values(facilities).map((facility) => ({
			label: facility.u_name,
			value: facility.u_name,
		}));
	}, [facilities]);

	const [loading, error, request] = useAsyncAction($fetchFacilities, []);

	React.useEffect(() => {
		request('').then(setFacilities);
	}, []);

	return { facilities, facilityOptions };
};
