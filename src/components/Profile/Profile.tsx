import * as React from 'react';
import { startCase } from 'lodash';

import { Profile as ProfileData } from 'baseballcloud/types';

import DefaultAvatar from '../../assets/images/default-avatar.png';
import AgeIcon from '../../assets/icons/age.svg';
import HeightIcon from '../../assets/icons/height.svg';
import WeightIcon from '../../assets/icons/weight.svg';
import ThrowsIcon from '../../assets/icons/throws.svg';
import BatsIcon from '../../assets/icons/bats.svg';

import PlayerAttribute from './PlayerAttribute';

import styles from './Profile.scss';

interface Props {
	data: ProfileData;
}

const Profile: React.FC<Props> = ({ data }) => {
	return (
		<div className={styles.profile}>
			<div className={styles.userInfo}>
				<img src={data.avatar ? data.avatar : DefaultAvatar} />
				<div className={styles.username}>
					{data.first_name} {data.last_name}
				</div>
				<div className={styles.position}>{startCase(data.position.toString())}</div>
				<div className={styles.position}>{startCase(data.position2.toString())}</div>
			</div>
			<div className={styles.personalInfo}>
				<PlayerAttribute icon={<AgeIcon />} name='Age' value={data.age} />
				<PlayerAttribute
					icon={<HeightIcon />}
					name='Height'
					value={`${data.feet} ft ${data.inches} in`}
				/>
				<PlayerAttribute icon={<WeightIcon />} name='Weight' value={`${data.weight} lbs`} />
				<PlayerAttribute
					icon={<ThrowsIcon />}
					name='Throws'
					value={data.throws_hand.toString().toUpperCase()}
				/>
				<PlayerAttribute
					icon={<BatsIcon />}
					name='Bats'
					value={data.bats_hand.toString().toUpperCase()}
				/>
			</div>
			<div className={styles.schoolInfo}>
				{data.school ? (
					<div className={styles.schoolInfoItem}>
						<div className={styles.schoolInfoItemTitle}>School</div>
						<div className={styles.schoolInfoItemValue}>{data.school.name}</div>
					</div>
				) : null}
				{data.school_year ? (
					<div className={styles.schoolInfoItem}>
						<div className={styles.schoolInfoItemTitle}>School Year</div>
						<div className={styles.schoolInfoItemValue}>
							{startCase(data.school_year.toString())}
						</div>
					</div>
				) : null}
				{data.teams.length > 0 ? (
					<div className={styles.schoolInfoItem}>
						<div className={styles.schoolInfoItemTitle}>Teams</div>
						<div className={styles.schoolInfoItemValue}>
							{data.teams.map((t) => t.name).join(',')}
						</div>
					</div>
				) : null}
				{data.facilities.length > 0 ? (
					<div className={styles.schoolInfoItem}>
						<div className={styles.schoolInfoItemTitle}>Facilties</div>
						<div className={styles.schoolInfoItemValue}>
							{data.facilities.map((f) => f.u_name).join(',')}
						</div>
					</div>
				) : null}
			</div>
			{data.biography ? (
				<div className={styles.bio}>
					<div className={styles.bioTitle}>About</div>
					<p>{data.biography}</p>
				</div>
			) : null}
		</div>
	);
};

export default Profile;