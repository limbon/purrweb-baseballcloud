import * as React from 'react';
import { useDispatch } from 'react-redux';

import { School } from 'baseballcloud/types';
import { requestSchools } from '../ducks/profile/asyncActions';

export const useSchools = () => {
	const [schools, setSchools] = React.useState<{ [index: string]: School }>({});
	const schoolOptions = React.useMemo(
		() => Object.values(schools).map((school) => ({ label: school.name, value: school.name })),
		[schools],
	);
	const dispatch = useDispatch();

	React.useEffect(() => {
		(dispatch(requestSchools()) as any).then((data: any) => setSchools(data));
	}, []);

	return { schools, schoolOptions };
};
