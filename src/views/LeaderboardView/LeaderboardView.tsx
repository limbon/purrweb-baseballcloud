import * as React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import styles from './LeaderboardView.scss';
import BattingLeaderboard from '../../components/BattingLeaderboard/BattingLeaderboard';

const Leaderboard: React.FC = () => {
	return (
		<div className={styles.view}>
			<div className={styles.heading}>Leaderboard</div>
			<Tabs>
				<TabList className={styles.tabs}>
					<Tab className={styles.tab} selectedClassName={styles.selected}>
						Batting
					</Tab>
					<Tab className={styles.tab} selectedClassName={styles.selected}>
						Pitching
					</Tab>
				</TabList>
				<TabPanel>
					<BattingLeaderboard />
				</TabPanel>
				<TabPanel></TabPanel>
			</Tabs>
		</div>
	);
};

export default Leaderboard;
