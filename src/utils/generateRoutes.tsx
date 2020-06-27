import * as React from 'react';
import { Switch, Route as ReactRouterRoute, Redirect } from 'react-router-dom';

import { Route, Router } from 'baseballcloud/types';

const flattenRoutes = (routes: Route[]) => {
	let newRoutes: Route[] = [];
	for (const route of routes) {
		if (route.subroutes && route.subroutes.length) {
			const { subroutes, ...r } = route;
			newRoutes.push(r);
			const subrs = flattenRoutes(subroutes).map((r) => ({
				...r,
				path: `${route.path}/${r.path}`,
			}));
			newRoutes.push(...subrs);
		} else {
			newRoutes.push(route);
		}
	}
	return newRoutes;
};

export const generateRoutes = (router: Router) => {
	return (
		<Switch>
			<ReactRouterRoute path='//'>{router.rootRoute.component}</ReactRouterRoute>
			{flattenRoutes(router.routes).map((r) => (
				<ReactRouterRoute
					key={r.path}
					exact={r.exact ?? true}
					path={`/${r.path}`}
					component={r.component}
				/>
			))}
			<ReactRouterRoute
				path={`/${router.fallbackRoute.path}`}
				component={router.fallbackRoute.component}
			/>
			<ReactRouterRoute
				path='*'
				component={() => <Redirect to={`/${router.fallbackRoute.path}`} />}
			/>
		</Switch>
	);
};
