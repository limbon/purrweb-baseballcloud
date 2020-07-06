import * as React from 'react';
import { startCase } from 'lodash';
import { useSelector } from 'react-redux';

import { Profile as ProfileData } from 'baseballcloud/types';

import { selectActiveProfile } from '../../utils/selectors';

import DefaultAvatar from '../../assets/images/default-avatar.png';
import AgeIcon from '../../assets/icons/age.svg';
import HeightIcon from '../../assets/icons/height.svg';
import WeightIcon from '../../assets/icons/weight.svg';
import ThrowsIcon from '../../assets/icons/throws.svg';
import BatsIcon from '../../assets/icons/bats.svg';
import EditIcon from '../../assets/icons/edit.svg';
import LikeIcon from '../../assets/icons/like.svg';

import PlayerAttribute from './PlayerAttribute';
import ProfileForm from '../ProfileForm/ProfileForm';

import styles from './Profile.scss';

interface Props {
	data: ProfileData;
}

const ProfileComponent: React.FC<Props> = ({ data }) => {
	return (
		<div className={styles.profile}>
			<div className={styles.userInfo}>
				<img src={data.avatar ? data.avatar : DefaultAvatar} />
				<div className={styles.username}>
					{data.first_name} {data.last_name}
				</div>
				<div className={styles.position}>{startCase(data.position?.toString())}</div>
				<div className={styles.position}>{startCase(data.position2?.toString())}</div>
			</div>
			<div className={styles.personalInfo}>
				<PlayerAttribute icon={<AgeIcon />} name='Age' value={data.age} />
				<PlayerAttribute
					icon={<HeightIcon />}
					name='Height'
					value={`${data.feet} ft ${data.inches || 0} in`}
				/>
				<PlayerAttribute icon={<WeightIcon />} name='Weight' value={`${data.weight} lbs`} />
				<PlayerAttribute
					icon={<ThrowsIcon />}
					name='Throws'
					value={data.throws_hand?.toString().toUpperCase()}
				/>
				<PlayerAttribute
					icon={<BatsIcon />}
					name='Bats'
					value={data.bats_hand?.toString().toUpperCase()}
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

const Profile: React.FC<Props> = ({ data }) => {
	const [edit, setEdit] = React.useState<boolean>(false);
	const activeProfile = useSelector(selectActiveProfile);

	const profileForm = React.useMemo(() => {
		return {
			id: data.id,
			avatar: data?.avatar,
			first_name: data?.first_name,
			last_name: data?.last_name,
			position: data?.position,
			position2: data?.position2,
			throws_hand: data.throws_hand,
			bats_hand: data?.bats_hand,
			biography: data?.biography,
			school_year: data.school_year,
			feet: data.feet?.toString(),
			inches: data.inches?.toString(),
			weight: data.weight?.toString(),
			age: data.age?.toString(),
			school: data?.school,
			teams: data?.teams,
			facilities: data?.facilities,
		};
	}, [data]);

	if (edit || !profileForm.first_name) {
		return (
			<ProfileForm
				onCancel={() => setEdit(false)}
				onSubmit={() => setEdit(false)}
				data={profileForm}
			/>
		);
	} else {
		return (
			<div className={styles.profileContainer}>
				{data.id === activeProfile?.id ? (
					<button onClick={() => setEdit(true)}>
						<EditIcon />
					</button>
				) : (
					<button>
						<LikeIcon />
					</button>
				)}
				<ProfileComponent data={data} />
			</div>
		);
	}
};

export default Profile;
