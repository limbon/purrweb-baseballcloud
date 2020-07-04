import * as React from 'react';
import { useDispatch } from 'react-redux';

import { router } from './router';

import { useRoutine } from './hooks/useRoutine';
import { generateRoutes } from './utils/generateRoutes';
import { validateToken } from './ducks/user';
import { fetchProfile } from './ducks/profile';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const App: React.FC = () => {
	const [ready, setReady] = React.useState<boolean>(false);
	const dispatch = useDispatch();
	const [_, requestValidateToken] = useRoutine(
		{ routine: validateToken, onSuccess: () => setReady(true) },
		[],
	);

	React.useEffect(() => {
		requestValidateToken();
	}, []);

	React.useEffect(() => {
		if (ready) {
			dispatch(fetchProfile());
		}
	}, [ready]);

	if (ready) {
		return (
			<div style={{ height: '100%', flexDirection: 'column', display: 'flex' }}>
				<Header />

				<div style={{ flex: 1, overflow: 'hidden' }}>{generateRoutes(router)}</div>
				<Footer />
			</div>
		);
	} else {
		return <h1>Loading...</h1>;
	}
};

export default App;
