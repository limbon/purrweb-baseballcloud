import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectUser, selectCredentials } from '../../utils/selectors';

const HomeView: React.FC = () => {
	const credentials = useSelector(selectCredentials);

	if (!credentials) {
		return <Redirect to='/sign-in' />;
	}

	return <Redirect to='/profile' />;
};

export default HomeView;
