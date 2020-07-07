import * as React from 'react';
import { OptionsType } from 'react-select';

import { TableColumn, LeaderboardType, LeaderboardBattingData } from 'baseballcloud/types';
import { useRoutine } from '../../hooks/useRoutine';
import { fetchLeaderboardBattingPromise } from '../../ducks/profile';

import Table from '../UI/Table/Table';
import Select from '../UI/Select/Select';

import styles from './BattingLeaderboard.scss';
import { Link } from 'react-router-dom';

interface Props {}

const leaderboardTypes: OptionsType<{ label: string; value: LeaderboardType }> = [
	{
		label: 'Exit Velocity',
		value: 'exit_velocity',
	},
	{
		label: 'Carry Distance',
		value: 'carry_distance',
	},
];

const columns: TableColumn[] = [
	{ key: 'rank', title: 'Rank', dataIndex: 'rank' },
	{ key: 'batter_name', title: 'Batter Name', dataIndex: 'batter_name' },
	{ key: 'age', title: 'Age', dataIndex: 'age' },
	{ key: 'school', title: 'School', dataIndex: 'school' },
	{ key: 'teams', title: 'Teams', dataIndex: 'teams' },
	{ key: 'exit_velocity', title: 'Exit Velocity', dataIndex: 'exit_velocity' },
	{ key: 'launch_angle', title: 'Launch Angle', dataIndex: 'launch_angle' },
	{ key: 'distance', title: 'Distance', dataIndex: 'distance' },
	{ key: 'favorite', title: 'Favorite', dataIndex: 'favorite' },
];

const BattingLeaderboard: React.FC<Props> = () => {
	const [leaderboard, setLeaderboard] = React.useState<LeaderboardBattingData[]>([]);
	const [selectedType, setSelectedType] = React.useState(leaderboardTypes[0].value);
	const [loading, requestLeaderboard] = useRoutine(fetchLeaderboardBattingPromise, [selectedType]);

	React.useEffect(() => {
		requestLeaderboard({ type: selectedType }).then(setLeaderboard);
	}, [selectedType]);

	return (
		<div className={styles.leaderboard}>
			<Select
				className={styles.type}
				onChange={(data: any) => setSelectedType(data.value)}
				options={leaderboardTypes}
				defaultValue={leaderboardTypes[0]}
				isSearchable={false}
			/>
			<div className={styles.table}>
				<Table
					loading={loading}
					columns={columns}
					data={leaderboard.map((p, idx) => ({
						...p,
						batter_name: <Link to={`/profile/${p.batter_datraks_id}`}>{p.batter_name}</Link>,
						key: `${p.batter_name}_${p.batter_datraks_id}`,
						rank: idx + 1,
						school: p.school.name,
						teams: p.teams.map((t) => t.name).join(','),
						favorite: p.favorite ? '+' : '-',
					}))}
				/>
			</div>
		</div>
	);
};

export default BattingLeaderboard;
