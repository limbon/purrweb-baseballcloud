import * as React from 'react';
import { OptionsType } from 'react-select';

import { TableColumn, LeaderboardType, LeaderboardPitchingData } from 'baseballcloud/types';

import { useRoutine } from '../../hooks/useRoutine';
import { fetchLeaderboardPitchingPromise } from '../../ducks/profile';

import Table from '../UI/Table/Table';
import Select from '../UI/Select/Select';

import styles from './PitchingLeaderboard.scss';

interface Props {}

const leaderboardTypes: OptionsType<{ label: string; value: LeaderboardType }> = [
	{
		label: 'Pitch Velocity',
		value: 'pitch_velocity',
	},
	{
		label: 'Spin Rate',
		value: 'spin_rate',
	},
];

const columns: TableColumn[] = [
	{ key: 'rank', title: 'Rank', dataIndex: 'rank' },
	{ key: 'pitcher_name', title: 'Pitcher Name', dataIndex: 'pitcher_name' },
	{ key: 'age', title: 'Age', dataIndex: 'age' },
	{ key: 'school', title: 'School', dataIndex: 'school' },
	{ key: 'teams', title: 'Teams', dataIndex: 'teams' },
	{ key: 'pitch_type', title: 'Pitch Type', dataIndex: 'pitch_type' },
	{ key: 'velocity', title: 'Velocity', dataIndex: 'velocity' },
	{ key: 'spin_rate', title: 'Spin Rate', dataIndex: 'spin_rate' },
	{ key: 'favorite', title: 'Favorite', dataIndex: 'favorite' },
];

const PitchingLeaderboard: React.FC<Props> = () => {
	const [leaderboard, setLeaderboard] = React.useState<LeaderboardPitchingData[]>([]);
	const [selectedType, setSelectedType] = React.useState(leaderboardTypes[0].value);
	const [loading, requestLeaderboard] = useRoutine(fetchLeaderboardPitchingPromise, [selectedType]);

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
						key: `${p.pitcher_name}_${p.pitcher_datraks_id}`,
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

export default PitchingLeaderboard;
