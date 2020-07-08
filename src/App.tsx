import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Route as Routes } from './utils/enums';

import { selectUser, selectCredentials } from './utils/selectors';
import { validateToken } from './ducks/user';
import { fetchProfile } from './ducks/profile';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomeView from './views/HomeView/HomeView';
import SignInView from './views/SignInView/SignInView';
import SignUpView from './views/SignUpView/SignUpView';
import TOSView from './views/Legal/TOSView';
import PrivacyView from './views/Legal/PrivacyView';
import MyProfileView from './views/MyProfileView/MyProfileView';
import ProfileView from './views/ProfileView/ProfileView';
import LeaderboardView from './views/LeaderboardView/LeaderboardView';
import NetworkView from './views/NetworkView/NetworkView';
import ProgressBar from './components/ProgressBar/ProgressBar';

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
			<div style={{ flex: 1, overflow: 'hidden' }}>
				<Switch>
					<Route path={Routes.Home} component={HomeView} />
					<Route path={Routes.SignIn} component={SignInView} />
					<Route path={Routes.SignUp} component={SignUpView} />
					<Route path={Routes.TOS} component={TOSView} />
					<Route path={Routes.Privacy} component={PrivacyView} />
					<Route path={Routes.Profile} exact component={MyProfileView} />
					<Route path={`${Routes.Profile}/:id`} component={ProfileView} />
					<Route path={Routes.Leaderboard} component={LeaderboardView} />
					<Route path={Routes.Network} component={NetworkView} />
					<Route path={Routes.Missing} component={() => <h1>404</h1>} />
					<Route path='*' component={() => <Redirect to={Routes.Missing} />} />
				</Switch>
			</div>
			<Footer />
		</div>
	);
};

export default App;
