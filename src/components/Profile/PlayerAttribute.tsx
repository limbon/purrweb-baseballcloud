import * as React from 'react';

import styles from './Profile.scss';

interface Props {
	name: string;
	value: string | number;
	icon?: JSX.Element;
}

const PlayerAttribute: React.FC<Props> = ({ name, icon, value }) => {
	return (
		<div className={styles.attribute}>
			<div className={styles.attributeName}>
				<div className={styles.icon}>{icon}</div>
				<span>{name}</span>
			</div>
			<div className={styles.attributeValue}>
				<span>{value}</span>
			</div>
		</div>
	);
};

export default PlayerAttribute;
