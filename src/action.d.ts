import { ActionType } from 'typesafe-actions';

export type RootAction =
	| ActionType<typeof import('./ducks/profile/actionCreators').default>
	| ActionType<typeof import('./ducks/user/actionCreators').default>;

declare module 'typesafe-actions' {
	interface Types {
		RootAction: RootAction;
	}
}
