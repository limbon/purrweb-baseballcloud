import * as React from 'react';
import parseHTML from 'react-html-parser';

import TOS from '../../assets/legal/TOS.md';

import styles from './Legal.scss';

const TOSView: React.FC = () => {
	return (
		<div className={styles.view}>
			<div className={styles.document}>{parseHTML(TOS)}</div>
		</div>
	);
};

export default TOSView;
