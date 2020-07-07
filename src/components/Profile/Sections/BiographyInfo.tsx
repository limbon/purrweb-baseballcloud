import * as React from 'react';
import { Profile } from 'baseballcloud/types';

import styles from './ProfileSections.scss';

interface Props {
	data: Profile;
}

const BiographyInfo: React.FC<Props> = ({ data }) => {
	return data.biography ? (
		<div className={styles.bio}>
			<div className={styles.bioTitle}>About</div>
			<p>{data.biography}</p>
		</div>
	) : null;
};

export default BiographyInfo;
