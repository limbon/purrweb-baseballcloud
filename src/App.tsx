import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { router } from './router';

import { generateRoutes } from './utils/generateRoutes';
import { validateToken } from './ducks/user';
import { fetchProfile } from './ducks/profile';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { selectUser, selectCredentials } from './utils/selectors';

const App: React.FC = () => {
	const user = useSelector(selectUser);
	const credentials = useSelector(selectCredentials);
	const dispatch = useDispatch();

	React.useEffect(() => {
		if (credentials && !user) {
			dispatch(validateToken());
		}
	}, [credentials, user]);

	React.useEffect(() => {
		if (user) {
			dispatch(fetchProfile());
		}
	}, [user]);

	return (
		<div style={{ height: '100%', flexDirection: 'column', display: 'flex' }}>
			<Header />
			<div style={{ flex: 1, overflow: 'hidden' }}>{generateRoutes(router)}</div>
			<Footer />
		</div>
	);
};

export default App;
