declare module '*.png';
declare module '*.md';
declare module '*.scss';
declare module '*.svg';

declare module 'baseballcloud/types' {
	type ApplicationStore = {
		message: string;
	};

	type Route = {
		path: string;
		component: React.ComponentType;
		name?: string;
		subroutes?: Route[];
		exact?: boolean;
	};

	type Router = {
		rootRoute: {
			component: React.ComponentType;
			name?: string;
		};
		fallbackRoute: {
			path: string;
			component: React.ComponentType;
			name?: string;
		};
		routes: Route[];
	};
}
