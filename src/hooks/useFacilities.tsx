import * as React from 'react';

import { Facility } from 'baseballcloud/types';

import { fetchFacilities } from '../ducks/profile';
import { useRoutine } from './useRoutine';

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

	const [loading, request] = useRoutine(
		{
			routine: fetchFacilities,
			onSuccess: (data: any) => setFacilities(data),
		},
		[],
	);

	React.useEffect(() => {
		request('');
	}, []);

	return { facilities, facilityOptions };
};
