import * as React from 'react';
import { OptionsType } from 'react-select';
import { Link } from 'react-router-dom';

import { Route } from '../../utils/enums';

import Table from '../UI/Table/Table';
import Select from '../UI/Select/Select';

import styles from './BattingLeaderboard.scss';

interface Props {}

const leaderboardTypes: OptionsType<{ label: string; value: string }> = [
	{
		label: 'Exit Velocity',
		value: 'exit_velocity',
	},
	{
		label: 'Carry Distance',
		value: 'carry_distance',
	},
];

const data = {
	leaderboard_batting: [
		{
			batter_name: 'Will Acuff',
			exit_velocity: 98.41,
			launch_angle: 5.98,
			distance: 38.42,
			batter_datraks_id: 419,
			age: 19,
			school: { id: '2', name: 'FSU' },
			teams: [{ id: '6', name: 'Scorps' }],
			favorite: false,
		},
		{
			batter_name: 'Alex Horne',
			exit_velocity: 89.855,
			launch_angle: null,
			distance: 68.073,
			batter_datraks_id: 412,
			age: 19,
			school: { id: '2', name: 'FSU' },
			teams: [{ id: '6', name: 'Scorps' }],
			favorite: false,
		},
		{
			batter_name: 'Jeffrey Korte',
			exit_velocity: 88.04,
			launch_angle: 6,
			distance: 68.8,
			batter_datraks_id: 415,
			age: 29,
			school: { id: '2', name: 'FSU' },
			teams: [{ id: '6', name: 'Scorps' }],
			favorite: false,
		},
		{
			batter_name: 'Jalen Hairston',
			exit_velocity: 81.229,
			launch_angle: null,
			distance: 67.97,
			batter_datraks_id: 413,
			age: 19,
			school: { id: '2', name: 'FSU' },
			teams: [{ id: '6', name: 'Scorps' }],
			favorite: true,
		},
		{
			batter_name: 'Jonathan Kreis',
			exit_velocity: 76.665,
			launch_angle: null,
			distance: 49.952,
			batter_datraks_id: 414,
			age: 18,
			school: { id: '2', name: 'FSU' },
			teams: [{ id: '6', name: 'Scorps' }],
			favorite: false,
		},
		{
			batter_name: 'Corey Whiting',
			exit_velocity: 72.024,
			launch_angle: null,
			distance: 83.883,
			batter_datraks_id: 415,
			age: 29,
			school: { id: '2', name: 'FSU' },
			teams: [{ id: '6', name: 'Scorps' }],
			favorite: false,
		},
	],
};

const BattingLeaderboard: React.FC<Props> = () => {
	const [selectedType, setSelectedType] = React.useState(leaderboardTypes[0].value);

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
					data={data.leaderboard_batting}
					render={data.leaderboard_batting.map((player, idx) => ({
						rank: idx + 1,
						batter_name: (
							<Link to={`${Route.Profile}/${player.batter_datraks_id}`}>{player.batter_name}</Link>
						),
						age: player.age,
						school: player.school.name,
						teams: player.teams.map((t) => t.name).join(','),
						exit_velocity: player.exit_velocity,
						launch_angle: player.launch_angle || '-',
						distance: player.distance,
						favorite: player.favorite ? '+' : '-',
					}))}
				/>
			</div>
		</div>
	);
};

export default BattingLeaderboard;
