import * as React from 'react';
import { Routine, promisifyRoutine } from 'redux-saga-routines';
import { useDispatch } from 'react-redux';

type Trigger = (args?: any) => void;

type Props = {
	routine: Routine;
	onSuccess?: (data: unknown) => void;
	onReject?: (error: Error) => void;
};

export const useRoutine = (props: Props, deps: any[]): [boolean, Trigger] => {
	const [loading, setLoading] = React.useState<boolean>(false);
	const dispatch = useDispatch();

	const trigger = React.useCallback((args?: any) => {
		setLoading(true);
		promisifyRoutine(props.routine)(args, dispatch).then(
			(data) => {
				setLoading(false);
				if (props.onSuccess) {
					props.onSuccess(data);
				}
			},
			(error) => {
				setLoading(false);
				if (props.onReject) {
					props.onReject(error);
				}
			},
		);
	}, deps);

	return [loading, trigger];
};
