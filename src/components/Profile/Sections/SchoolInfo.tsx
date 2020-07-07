import * as React from 'react';
import { Profile } from 'baseballcloud/types';

import styles from './ProfileSections.scss';

interface Props {
	data: Profile;
}

const schoolYearMap: { [index: string]: string } = {
	junior: 'Junior',
	senior: 'Senior',
	freshman: 'Freshman',
	sophomore: 'Sophomore',
};

const SchoolInfo: React.FC<Props> = ({ data }) => {
	return (
		<div className={styles.schoolInfo}>
			{data.school && (
				<div className={styles.schoolInfoItem}>
					<div className={styles.schoolInfoItemTitle}>School</div>
					<div className={styles.schoolInfoItemValue}>{data.school.name}</div>
				</div>
			)}
			{data.school_year && (
				<div className={styles.schoolInfoItem}>
					<div className={styles.schoolInfoItemTitle}>School Year</div>
					<div className={styles.schoolInfoItemValue}>{schoolYearMap[data.school_year]}</div>
				</div>
			)}
			{data.teams.length > 0 && (
				<div className={styles.schoolInfoItem}>
					<div className={styles.schoolInfoItemTitle}>Teams</div>
					<div className={styles.schoolInfoItemValue}>
						{data.teams.map((t) => t.name).join(',')}
					</div>
				</div>
			)}
			{data.facilities.length > 0 && (
				<div className={styles.schoolInfoItem}>
					<div className={styles.schoolInfoItemTitle}>Facilties</div>
					<div className={styles.schoolInfoItemValue}>
						{data.facilities.map((f) => f.u_name).join(',')}
					</div>
				</div>
			)}
		</div>
	);
};

export default SchoolInfo;
