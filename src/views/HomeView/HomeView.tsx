import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Route } from '../../utils/enums';

import { selectUser } from '../../utils/selectors';

const HomeView: React.FC = () => {
	const user = useSelector(selectUser);

	if (user) {
		return <Redirect to={Route.Profile} />;
	} else {
		return <Redirect to={Route.SignIn} />;
	}
};

export default HomeView;
