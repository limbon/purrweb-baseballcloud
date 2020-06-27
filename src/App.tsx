import * as React from 'react';
import { ApplicationStore } from 'baseballcloud/types';
import { useSelector } from 'react-redux';

import { generateRoutes } from './utils/generateRoutes';
import { router } from './router';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
	const message = useSelector((store: ApplicationStore) => store.message);

	return (
		<div style={{ height: '100%', flexDirection: 'column', display: 'flex' }}>
			<div style={{ flex: 1 }}>{generateRoutes(router)}</div>
			<Footer />
		</div>
	);
};

export default App;
