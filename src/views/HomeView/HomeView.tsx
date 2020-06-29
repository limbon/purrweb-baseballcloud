import * as React from 'react';
import { Redirect } from 'react-router-dom';

import { Route } from '../../utils/enums';
import { useSelector } from 'react-redux';

const HomeView: React.FC = () => {
	const user = useSelector((store: any) => store.user);

	console.log(user);

	if (user) {
		return <Redirect to={Route.Profile} />;
	} else {
		return <Redirect to={Route.SignIn} />;
	}
};

export default HomeView;
