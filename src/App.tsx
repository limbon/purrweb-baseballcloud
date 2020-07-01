import * as React from 'react';
import { useDispatch } from 'react-redux';

import { router } from './router';

import { generateRoutes } from './utils/generateRoutes';
import { validateToken } from './ducks/user';
import { requestProfile } from './ducks/profile';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Select from './components/UI/Select/Select';

const App: React.FC = () => {
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(validateToken());
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
