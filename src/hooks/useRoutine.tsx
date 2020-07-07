import * as React from 'react';
import { PromiseCreator } from 'redux-saga-routines';
import { useDispatch } from 'react-redux';

type Trigger<T> = (payload: T) => Promise<any>;

export function useRoutine<T extends unknown>(
	promise: PromiseCreator<T>,
	deps: any[],
): [boolean, Trigger<T>] {
	const [loading, setLoading] = React.useState<boolean>(false);
	const dispatch = useDispatch();

	const trigger = React.useCallback(async (payload: T) => {
		setLoading(true);
		try {
			const result = await promise(payload, dispatch);
			return result;
		} catch (error) {
			throw error;
		} finally {
			setLoading(false);
		}
	}, deps);

	return [loading, trigger];
}
