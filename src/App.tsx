import * as React from 'react';
import { ApplicationStore } from 'baseballcloud/types';
import { useSelector } from 'react-redux';

import { generateRoutes } from './utils/generateRoutes';
import { router } from './router';

const App: React.FC = () => {
	const message = useSelector((store: ApplicationStore) => store.message);

	return <div>{generateRoutes(router)}</div>;
};

export default App;
