export enum ServiceID {
	CacheService = 'CacheService',
	ApiService = 'ApiService',
}

export enum Route {
	Home = '',
	Missing = '404',
	SignIn = 'sign-in',
	SignUp = 'sign-up',
	PasswordRecovery = 'recovery',
	TOS = 'tos',
	Privacy = 'privacy',
	Profile = 'profile',
	Network = 'network',
	Leaderboard = 'leaderboard',
}

export enum AuthField {
	Email = 'email',
	Password = 'password',
	ConfirmPassword = 'password_confirmation',
	Role = 'role',
}

export enum Position {
	Catcher = 'catcher',
	Pitcher = 'pitcher',
	Firstbase = 'firstbase',
	Secondbase = 'secondbase',
	Thirdbase = 'thirdbase',
	Shortstop = 'shortstop',
	Outfield = 'outfield',
}

export enum Hand {
	Right = 'r',
	Left = 'l',
}

export enum SchoolYear {
	Junior = 'junior',
	Senior = 'senior',
	Freshman = 'freshman',
	Sophomore = 'sophomore',
}

export enum Role {
	Player = 'player',
	Scout = 'scout',
}
