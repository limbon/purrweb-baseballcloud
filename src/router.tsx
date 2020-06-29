import * as React from 'react';

import { Router } from 'baseballcloud/types';
import { Route } from './utils/enums';

import SignInView from './views/SignInView/SignInView';
import SignUpView from './views/SignUpView/SignUpView';
import TOSView from './views/Legal/TOSView';
import PrivacyView from './views/Legal/PrivacyView';
import ProfileView from './views/ProfileView/ProfileView';

export const router: Router = {
	rootRoute: {
		// TEMP
		component: () => (
			<div>
				<h1>Home</h1>
			</div>
		),
		name: 'Home',
	},
	fallbackRoute: {
		path: Route.Missing,
		component: () => (
			<div>
				<h1>404</h1>
			</div>
		),
	},
	routes: [
		{
			path: Route.SignIn,
			component: SignInView,
		},
		{
			path: Route.SignUp,
			component: SignUpView,
		},
		{
			path: Route.PasswordRecovery,
			component: () => <div>Password Recovery</div>,
		},
		{
			path: Route.TOS,
			component: TOSView,
		},
		{
			path: Route.Privacy,
			component: PrivacyView,
		},
		{
			path: Route.Profile,
			component: ProfileView,
			subroutes: [{ path: ':id', component: ProfileView }],
		},
		{
			path: Route.Leaderboard,
			component: () => <div>Leaderboard</div>,
		},
		{
			path: Route.Network,
			component: () => <div>Network</div>,
		},
	],
};
