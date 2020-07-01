import * as React from 'react';
import { Form, Field } from 'react-final-form';

import DefaultAvatar from '../../assets/images/default-avatar.png';

import styles from './ProfileForm.scss';

type Avatar = {
	name: string | null;
	data: string;
};

interface Props {
	avatar: string | null;
}

const fileReader = new FileReader();

const AvatarUpload: React.FC<Props> = ({ avatar }) => {
	const [_avatar, setAvatar] = React.useState<Avatar>({
		name: null,
		data: avatar || DefaultAvatar,
	});

	React.useEffect(() => {
		fileReader.onload = (e) => {
			setAvatar({ ..._avatar, data: e.target?.result as string });
		};
	}, [_avatar]);

	const setAvatarDataUrl = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setAvatar({ ..._avatar, name: e.target.files[0].name });
			fileReader.readAsDataURL(e.target.files[0]);
		}
	}, []);

	const handleSubmit = React.useCallback(() => {
		console.log('Submit avatar');
	}, []);

	return (
		<Form onSubmit={handleSubmit}>
			{({ handleSubmit }) => (
				<form className={styles.avatarForm} onSubmit={handleSubmit}>
					<img className={styles.avatar} src={_avatar.data} />
					<Field name='avatar'>
						{() => (
							<div className={styles.input}>
								<input onChange={setAvatarDataUrl} type='file' />
								<span>{_avatar.name || 'Choose photo'}</span>
							</div>
						)}
					</Field>
					{_avatar.data !== avatar && (
						<div className={styles.buttons}>
							<button className={styles.upload}>Upload photo</button>
							<button
								className={styles.cancel}
								type='button'
								onClick={() => setAvatar({ name: null, data: avatar || DefaultAvatar })}
							>
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
