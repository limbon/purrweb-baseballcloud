declare module '*.png';
declare module '*.md';
declare module '*.scss';
declare module '*.svg';

declare module 'baseballcloud/types' {
	type ApplicationStore = {
		user: UserState;
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

	enum Role {
		Player,
		Scout,
	}

	type CachedData = {
		'access-token': string;
		client: string;
		uid: string;
	};

	type SignInFormData = {
		email: string;
		password: string;
	};

	type TeamAvatar = {
		url: string | null;
		size_100_100: { url: string | null };
		size_40_40: { url: string | null };
		size_32_32: { url: string | null };
		size_20_20: { url: string | null };
	};

	type User = {
		id: number;
		email: string;
		u_name: string | null;
		team_avatar: TeamAvatar;
		role: Role;
		team_user: boolean;
		uid: string;
		unsubscribe: boolean;
		plan_id: number | null;
		paid: boolean;
		direct_paid: boolean;
	};

	type UserState = User | null;
}
