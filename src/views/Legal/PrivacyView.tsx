import * as React from 'react';
import parseHTML from 'react-html-parser';

import Privacy from '../../assets/legal/Privacy.md';

import styles from './Legal.scss';

const PrivacyView: React.FC = () => {
	return (
		<div className={styles.view}>
			<div className={styles.document}>{parseHTML(Privacy)}</div>
		</div>
	);
};

export default PrivacyView;
