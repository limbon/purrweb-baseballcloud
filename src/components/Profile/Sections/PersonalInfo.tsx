import * as React from 'react';

import { Profile } from 'baseballcloud/types';

import AgeIcon from '../../../assets/icons/age.svg';
import HeightIcon from '../../../assets/icons/height.svg';
import WeightIcon from '../../../assets/icons/weight.svg';
import ThrowsIcon from '../../../assets/icons/throws.svg';
import BatsIcon from '../../../assets/icons/bats.svg';

import styles from './ProfileSections.scss';

interface Props {
	data: Profile;
}

const handMap: { [index: string]: string } = {
	l: 'L',
	r: 'R',
};

const PersonalInfo: React.FC<Props> = ({ data }) => {
	return (
		<div className={styles.personalInfo}>
			<div className={styles.attribute}>
				<div className={styles.attributeName}>
					<div className={styles.icon}>
						<AgeIcon />
					</div>
					<span>Age</span>
				</div>
				<div className={styles.attributeValue}>
					<span>{data.age}</span>
				</div>
			</div>
			<div className={styles.attribute}>
				<div className={styles.attributeName}>
					<div className={styles.icon}>
						<HeightIcon />
					</div>
					<span>Height</span>
				</div>
				<div className={styles.attributeValue}>
					<span>
						{data.feet} ft {data.inches || 0} in
					</span>
				</div>
			</div>
			<div className={styles.attribute}>
				<div className={styles.attributeName}>
					<div className={styles.icon}>
						<WeightIcon />
					</div>
					<span>Weight</span>
				</div>
				<div className={styles.attributeValue}>
					<span>{data.weight} lbs</span>
				</div>
			</div>
			<div className={styles.attribute}>
				<div className={styles.attributeName}>
					<div className={styles.icon}>
						<ThrowsIcon />
					</div>
					<span>Throws</span>
				</div>
				<div className={styles.attributeValue}>
					<span>{handMap[data.throws_hand]}</span>
				</div>
			</div>
			<div className={styles.attribute}>
				<div className={styles.attributeName}>
					<div className={styles.icon}>
						<BatsIcon />
					</div>
					<span>Bats</span>
				</div>
				<div className={styles.attributeValue}>
					<span>{handMap[data.bats_hand]}</span>
				</div>
			</div>
		</div>
	);
};

export default PersonalInfo;
