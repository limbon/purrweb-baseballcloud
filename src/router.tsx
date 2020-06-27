import * as React from 'react';

import { Router } from 'baseballcloud/types';
import { Route } from './utils/enums';

import SignIn from './views/SignInView/SignInView';

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
			component: SignIn,
		},
		{
			path: Route.SignUp,
			component: () => <div>SignUp</div>,
		},
		{
			path: Route.PasswordRecovery,
			component: () => <div>Password Recovery</div>,
		},
		{
			path: Route.TOS,
			component: () => <div>TOS</div>,
		},
		{
			path: Route.Privacy,
			component: () => <div>Privacy</div>,
		},
		{
			path: Route.Profile,
			// TODO: Handle profile by id
			component: () => <div>Profile</div>,
			exact: false,
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
