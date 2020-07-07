import * as React from 'react';

import { TableColumn, NetworkUserData } from 'baseballcloud/types';

import { useRoutine } from '../../hooks/useRoutine';
import { fetchNetworkPromise } from '../../ducks/profile';

import Table from '../../components/UI/Table/Table';
import Pagination from '../../components/UI/Pagination/Pagination';

import styles from './NetworkView.scss';

const columns: TableColumn[] = [
	{ key: 'player_name', title: 'Player Name', dataIndex: 'player_name' },
	{ key: 'sessions', title: 'Sessions', dataIndex: 'sessions' },
	{ key: 'school', title: 'School', dataIndex: 'school' },
	{ key: 'teams', title: 'Teams', dataIndex: 'teams' },
	{ key: 'age', title: 'Age', dataIndex: 'age' },
	{ key: 'favorite', title: 'Favorite', dataIndex: 'favorite' },
];

const NetworkView: React.FC = () => {
	const [profiles, setProfiles] = React.useState<NetworkUserData[]>([]);
	const [toShow, setToShow] = React.useState<number>(10);
	const [offset, setOffset] = React.useState<number>(0);
	const [totalCount, setTotalCount] = React.useState<number>(0);

	const [loading, requestProfiles] = useRoutine(fetchNetworkPromise, [toShow, offset]);

	React.useEffect(() => {
		requestProfiles({ offset, profiles_count: toShow }).then((data) => {
			setProfiles(data.profiles);
			setTotalCount(data.total_count);
		});
	}, [offset, toShow]);

	return (
		<div className={styles.view}>
			<div className={styles.heading}>Avaliable players ({totalCount})</div>
			<div className={styles.table}>
				<Table
					loading={loading}
					data={profiles.map((d) => ({
						key: d.id,
						player_name: `${d.first_name} ${d.last_name}`,
						sessions: d.events.length || '-',
						school: d.school?.name || '-',
						teams: d.teams?.map((t: any) => t.name).join(',') || '-',
						age: d.age,
						favorite: d.favorite ? '+' : '-',
					}))}
					columns={columns}
				/>
			</div>
			<div className={styles.pagination}>
				<Pagination
					max={totalCount}
					toShow={toShow}
					onChange={(page) => setOffset(toShow * page - toShow)}
				/>
			</div>
		</div>
	);
};

export default NetworkView;
