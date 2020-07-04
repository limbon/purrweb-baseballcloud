import React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './Loading.scss';

interface Props extends Partial<FontAwesomeIconProps> {}

const Loading: React.FC<Props> = (props) => {
	return (
		<div className={styles.loading}>
			<FontAwesomeIcon icon={faSpinner} spin {...props} />
		</div>
	);
};

export default Loading;
