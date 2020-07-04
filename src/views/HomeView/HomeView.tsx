import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Route } from '../../utils/enums';

import { selectUser, selectCredentials } from '../../utils/selectors';

const HomeView: React.FC = () => {
	const credentials = useSelector(selectCredentials);

	if (!credentials) {
		return <Redirect to={Route.SignIn} />;
	}

	return <Redirect to={Route.Profile} />;
};

export default HomeView;
