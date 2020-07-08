import * as React from 'react';
import { Line } from 'rc-progress';

import styles from './ProgressBar.scss';

const getPercent = (min: number, max: number, current: number) => {
	return ((current - min) * 100) / (max - min);
};

interface Props {
	title: string;
	min: number;
	max: number;
	current: number;
}

const ProgressBar: React.FC<Props> = ({ min, max, current, title }) => {
	const value = React.useMemo(() => getPercent(min, max, current), []);

	return (
		<div className={styles.progressBar}>
			<div className={styles.values}>
				<span className={styles.title}>{title}</span>
				<span className={styles.value}>{current}</span>
			</div>
			<Line percent={value} strokeColor='#ffd01a' />
		</div>
	);
};

export default ProgressBar;
