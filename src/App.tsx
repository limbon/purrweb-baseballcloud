import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { router } from './router';

import { useRoutine } from './hooks/useRoutine';
import { generateRoutes } from './utils/generateRoutes';
import { validateToken } from './ducks/user';
import { fetchProfile } from './ducks/profile';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { selectUser } from './utils/selectors';

const App: React.FC = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(validateToken());
	}, []);

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
