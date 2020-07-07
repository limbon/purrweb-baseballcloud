import * as React from 'react';

import { Profile } from 'baseballcloud/types';

import DefaultAvatar from '../../../assets/images/default-avatar.png';

import styles from './ProfileSections.scss';

interface Props {
	data: Profile;
}

const positionMap: { [index: string]: string } = {
	catcher: 'Catcher',
	pitcher: 'Pitcher',
	first_base: 'First Base',
	second_base: 'Second Base',
	third_base: 'Third Base',
	shortstop: 'Shortstop',
	outfield: 'Outfield',
};

const UserInfo: React.FC<Props> = ({ data }) => {
	return (
		<div className={styles.userInfo}>
			<img src={data.avatar || DefaultAvatar} />
			<div className={styles.username}>
				{data.first_name} {data.last_name}
			</div>
			<div className={styles.position}>{positionMap[data.position]}</div>
			<div className={styles.position}>{positionMap[data.position2]}</div>
		</div>
	);
};

export default UserInfo;
