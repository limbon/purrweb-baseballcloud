import * as React from 'react';
import { ApplicationStore } from 'baseballcloud/types';
import { useSelector } from 'react-redux';
import { IOC } from './ioc';

const App: React.FC = () => {
	const message = useSelector((store: ApplicationStore) => store.message);
	return (
		<div>
			<h1>{message}</h1>
		</div>
	);
};

export default App;
