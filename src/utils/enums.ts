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
}

export enum Role {
	Player = 'player',
	Scout = 'scout',
}
