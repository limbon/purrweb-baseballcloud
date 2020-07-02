import * as React from 'react';
import { useDispatch } from 'react-redux';

import { Facility } from 'baseballcloud/types';

import { requestFacilites } from '../ducks/profile/asyncActions';

export const useFacilites = () => {
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
		(dispatch(requestFacilites()) as any).then((data: any) => setFacilities(data));
	}, []);

	return { facilities, facilityOptions };
};
