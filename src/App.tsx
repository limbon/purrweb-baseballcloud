import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { router } from './router';

import { useRoutine } from './hooks/useRoutine';
import { generateRoutes } from './utils/generateRoutes';
import { validateToken } from './ducks/user';
import { fetchProfile } from './ducks/profile';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { selectUser, selectCredentials } from './utils/selectors';
import Table from './components/UI/Table/Table';
import { Link } from 'react-router-dom';
import { Route } from './utils/enums';

const App: React.FC = () => {
	const user = useSelector(selectUser);
	const credentials = useSelector(selectCredentials);
	const dispatch = useDispatch();

	React.useEffect(() => {
		if (credentials && !user) {
			dispatch(validateToken());
		}
	}, [credentials, user]);

	React.useEffect(() => {
		if (user) {
			dispatch(fetchProfile());
		}
	}, [user]);

	const data = {
		profiles: [
			{
				id: '470',
				first_name: '123',
				last_name: '456',
				position: 'catcher',
				position2: 'first_base',
				school_year: 'sophomore',
				feet: 7,
				inches: 11,
				weight: 200,
				age: 29,
				events: [],
				school: { id: '2', name: 'FSU' },
				teams: [{ id: '7', name: 'FTB' }],
				favorite: false,
			},
			{
				id: '478',
				first_name: 'Nico',
				last_name: 'Belic',
				position: null,
				position2: null,
				school_year: null,
				feet: 6,
				inches: 6,
				weight: 244,
				age: 24,
				events: [],
				school: { id: '2', name: 'FSU' },
				teams: [],
				favorite: false,
			},
			{
				id: '471',
				first_name: 'Xiao',
				last_name: 'Bing',
				position: 'third_base',
				position2: 'catcher',
				school_year: 'senior',
				feet: 6,
				inches: 2,
				weight: 225,
				age: 24,
				events: [],
				school: { id: '11', name: 'asg' },
				teams: [
					{ id: '8', name: 'Good Team' },
					{ id: '12', name: 'My Team' },
					{ id: '16', name: 'eeqwt' },
				],
				favorite: false,
			},
			{
				id: '422',
				first_name: 'Michael',
				last_name: 'Congrove',
				position: 'first_base',
				position2: null,
				school_year: null,
				feet: 6,
				inches: 0,
				weight: 170,
				age: 18,
				events: [],
				school: null,
				teams: [],
				favorite: false,
			},
			{
				id: '421',
				first_name: 'Michael',
				last_name: 'Congrove',
				position: 'first_base',
				position2: null,
				school_year: null,
				feet: 5,
				inches: 9,
				weight: 180,
				age: 19,
				events: [],
				school: { id: '2', name: 'FSU' },
				teams: [],
				favorite: false,
			},
			{
				id: '439',
				first_name: 'xa',
				last_name: 'DFS',
				position: 'catcher',
				position2: null,
				school_year: null,
				feet: 7,
				inches: 0,
				weight: 65,
				age: 3,
				events: [],
				school: null,
				teams: [],
				favorite: false,
			},
			{
				id: '443',
				first_name: 'xaxas',
				last_name: 'DFS',
				position: 'Second Base',
				position2: 'Outfield',
				school_year: 'freshman',
				feet: 6,
				inches: 11,
				weight: 180,
				age: 25,
				events: [],
				school: { id: '2', name: 'FSU' },
				teams: [
					{ id: '7', name: 'FTB' },
					{ id: '6', name: 'Scorps' },
				],
				favorite: false,
			},
			{
				id: '429',
				first_name: 'ssa',
				last_name: 'dsa',
				position: 'third_base',
				position2: null,
				school_year: null,
				feet: 5,
				inches: 0,
				weight: 65,
				age: 21,
				events: [],
				school: null,
				teams: [],
				favorite: false,
			},
			{
				id: '427',
				first_name: 'Roman',
				last_name: 'Gladyshev',
				position: 'second_base',
				position2: null,
				school_year: 'sophomore',
				feet: 6,
				inches: 0,
				weight: 50,
				age: 20,
				events: [],
				school: { id: '2', name: 'FSU' },
				teams: [],
				favorite: false,
			},
			{
				id: '442',
				first_name: 'Romchik',
				last_name: 'Gladyshev2',
				position: 'catcher',
				position2: 'catcher',
				school_year: 'freshman',
				feet: 6,
				inches: 11,
				weight: 180,
				age: 20,
				events: [],
				school: { id: '2', name: 'FSU' },
				teams: [
					{ id: '6', name: 'Scorps' },
					{ id: '7', name: 'FTB' },
				],
				favorite: false,
			},
		],
	};

	return (
		<div style={{ height: '100%', flexDirection: 'column', display: 'flex' }}>
			<Header />
			<div style={{ flex: 1, overflow: 'hidden' }}>{generateRoutes(router)}</div>
			<Table
				onRowClick={console.log}
				data={data.profiles}
				render={data.profiles.map((d, idx) => ({
					batter_name: (
						<Link to={{ pathname: `/profile/${d.id}` }}>{`${d.first_name} ${d.last_name}`}</Link>
					),

					sessions: d.events.length || '-',
					school: d.school?.name || '-',
					teams: (d.teams as any).map((t: any) => t.name).join(','),
					age: d.age,
					favirite: d.favorite ? '+' : '-',
				}))}
			/>
			<Footer />
		</div>
	);
};

export default App;
