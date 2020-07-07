import * as React from 'react';
import { Link } from 'react-router-dom';

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

	const tableData = React.useMemo(() => {
		return profiles.map((p) => ({
			key: p.id,
			player_name: (
				<Link to={`/profile/${p.id}`}>
					{p.first_name} {p.last_name}
				</Link>
			),
			sessions: p.events.length || '-',
			school: p.school?.name || '-',
			teams: p.teams?.map((t: any) => t.name).join(',') || '-',
			age: p.age,
			favorite: p.favorite ? '+' : '-',
		}));
	}, [profiles]);

	return (
		<div className={styles.view}>
			<div className={styles.heading}>Avaliable players ({totalCount})</div>
			<div className={styles.table}>
				<Table loading={loading} data={tableData} columns={columns} />
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
