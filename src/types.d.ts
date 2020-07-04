declare module '*.png';
declare module '*.md';
declare module '*.scss';
declare module '*.svg';

declare module 'use-dropdown';

declare module 'baseballcloud/types' {
	type ApplicationStore = {
		userState: UserState;
		profileState: ProfileState;
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

	enum Position {
		Catcher,
		Pitcher,
		Firstbase,
		Secondbase,
		Thirdbase,
		Shortstop,
		Outfield,
	}

	enum SchoolYear {
		Junior,
		Senior,
		Freshman,
		Sophomore,
	}

	enum Hand {
		Left,
		Right,
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
	type School = {
		id: string;
		name: string;
	};

	type Team = {
		id: string;
		name: string;
	};

	type Facility = {
		id: number;
		email: string;
		u_name: string;
	};

	type BatterTopValues = {
		pitch_type: string;
		distance: number;
		launch_angle: number;
		exit_velocity: number;
	};

	type BatterSummary = {
		exit_velocity: number;
		distance: number;
		launch_angle: number;
	};

	type PitcherTopValues = {
		velocity: number;
		spin_rate: number;
		pitch_movement: number;
	};

	type PitcherSummary = {
		velocity: number;
		spin_rate: number;
		horizontal_break: number | null;
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

	type UserState = {
		user: User | null;
		loading: boolean;
		error: Error | null;
	};

	type Profile = {
		id: string;
		first_name: string;
		last_name: string;
		position: Position;
		position2: Position;
		school_year: SchoolYear;
		avatar: string | null;
		throws_hand: Hand;
		bats_hand: Hand;
		biography: string;
		feet: number;
		inches: number;
		weight: number;
		age: number;
		recent_events: [];
		winsgspan: null;
		grip_right: null;
		grip_left: null;
		wrist_to_elbow: null;
		broad_jump: null;
		act_score: number | null;
		gpa_score: number | null;
		sat_score: number | null;
		batting_top_values: BatterTopValues[];
		pitching_top_values: PitcherTopValues[];
		pitcher_summary: PitcherSummary[];
		batter_summary: BatterSummary[];
		school: School;
		teams: Team[];
		facilities: Facility[];
		favorite: boolean;
		events_opened: boolean;
		paid: boolean;
	};

	type ProfileForm = {
		id: string;
		first_name: string;
		last_name: string;
		position: Position;
		position2: Position;
		school_year: SchoolYear;
		avatar: string | null;
		throws_hand: Hand;
		bats_hand: Hand;
		biography: string;
		feet: string;
		inches: string;
		weight: string;
		age: string;
		school: School;
		teams: Team[];
		facilities: Facility[];
	};

	type ProfileState = {
		activeProfile: string | null;
		profiles: { [index: string]: Profile };
		loading: boolean;
		error: Error | null;
	};
}
