import * as React from 'react';

import { Router } from 'baseballcloud/types';
import { Route } from './utils/enums';

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
	routes: [],
};
