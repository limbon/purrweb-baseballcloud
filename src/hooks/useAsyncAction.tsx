import * as React from 'react';
import { useDispatch } from 'react-redux';

type AnyFunction = (...args: any) => any;
type Trigger<F extends AnyFunction> = (payload: Parameters<F>[1]) => ReturnType<any>;

export function useAsyncAction<TPromisifiedAction extends AnyFunction>(
	promisifiedAction: TPromisifiedAction,
	deps: any[],
): [boolean, any, Trigger<typeof promisifiedAction>] {
	const [loading, setLoading] = React.useState<boolean>(false);
	const [error, setError] = React.useState<any>();
	const dispatch = useDispatch();

	const trigger = React.useCallback(async (payload) => {
		setLoading(true);
		try {
			const response = await promisifiedAction(dispatch, payload);
			return response;
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	}, deps);

	return [loading, error, trigger];
}
