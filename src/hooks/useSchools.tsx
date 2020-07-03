import * as React from 'react';
import { useDispatch } from 'react-redux';

import { School } from 'baseballcloud/types';
import { requestSchools } from '../ducks/profile/asyncActions';

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
				(dispatch(requestSchools(value)) as any).then((data: any) => {
					setSchools({ ...schools, ...data });
					setLoading(false);
				});
			}
		},
		[schools],
	);

	React.useEffect(() => {
		setLoading(true);
		(dispatch(requestSchools('')) as any).then((data: any) => {
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
