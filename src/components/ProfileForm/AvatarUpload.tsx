import * as React from 'react';
import { Form, Field } from 'react-final-form';

import DefaultAvatar from '../../assets/images/default-avatar.png';

import styles from './ProfileForm.scss';
import { useRoutine } from '../../hooks/useRoutine';
import { updateProfile, updateAvatar } from '../../ducks/profile';
import { useDispatch } from 'react-redux';

type Avatar = {
	name: string | null;
	url: string;
	file: File | null;
};

interface Props {
	avatar: string | null;
	onUpload: (url: string) => void;
}

const fileReader = new FileReader();

const AvatarUpload: React.FC<Props> = ({ avatar, onUpload }) => {
	const [_avatar, setAvatar] = React.useState<Avatar>({
		name: null,
		url: avatar || DefaultAvatar,
		file: null,
	});
	const [loading, update] = useRoutine(
		{
			routine: updateAvatar,
			onSuccess: (url: any) => {
				setAvatar({ name: null, file: null, url });
				onUpload(url);
			},
		},
		[],
	);

	React.useEffect(() => {
		fileReader.onload = (e) => {
			setAvatar({ ..._avatar, url: e.target?.result as string });
		};
	}, [_avatar]);

	const prepareAvatarData = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setAvatar({ ..._avatar, file: e.target.files[0], name: e.target.files[0].name });
			fileReader.readAsDataURL(e.target.files[0]);
		}
	}, []);

	const handleSubmit = React.useCallback(() => {
		update({ name: _avatar.name, data: _avatar.file });
	}, [_avatar]);

	const handleCancel = React.useCallback(() => {
		setAvatar({ name: null, file: null, url: avatar || DefaultAvatar });
	}, []);

	return (
		<Form onSubmit={handleSubmit}>
			{({ handleSubmit }) => (
				<form className={styles.avatarForm} onSubmit={handleSubmit}>
					<img className={styles.avatar} src={_avatar.url} />
					{loading ? (
						<span>Loading...</span>
					) : (
						<Field name='avatar'>
							{() => (
								<div className={styles.input}>
									<input onChange={prepareAvatarData} type='file' />
									<span>{_avatar.name || 'Choose photo'}</span>
								</div>
							)}
						</Field>
					)}
					{_avatar.file && !loading && (
						<div className={styles.buttons}>
							<button className={styles.upload}>Upload photo</button>
							<button className={styles.cancel} type='button' onClick={handleCancel}>
								Cancel
							</button>
						</div>
					)}
				</form>
			)}
		</Form>
	);
};

export default AvatarUpload;
