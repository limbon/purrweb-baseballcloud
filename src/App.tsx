import * as React from 'react';

import { generateRoutes } from './utils/generateRoutes';
import { router } from './router';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { useDispatch } from 'react-redux';
import { requestProfile } from './ducks/profile';

const App: React.FC = () => {
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(requestProfile());
	}, []);

	return (
		<div style={{ height: '100%', flexDirection: 'column', display: 'flex' }}>
			<Header />
			<div style={{ flex: 1, overflow: 'hidden' }}>{generateRoutes(router)}</div>
			<Footer />
		</div>
	);
};

export default App;
