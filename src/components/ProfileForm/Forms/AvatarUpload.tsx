import * as React from 'react';
import { Form, Field } from 'react-final-form';

import { useRoutine } from '../../../hooks/useRoutine';
import { updateAvatar, updateAvatarPromise } from '../../../ducks/profile';

import DefaultAvatar from '../../../assets/images/default-avatar.png';

import styles from './Form.scss';

type Avatar = {
	name: string | null;
	url: string;
	file: File | null;
};

interface Props {
	avatarUrl: string | null;
	onUpload: (url: string) => void;
}

const fileReader = new FileReader();

const AvatarUpload: React.FC<Props> = ({ avatarUrl, onUpload }) => {
	const [avatar, setAvatar] = React.useState<Avatar>({
		name: null,
		url: avatarUrl || DefaultAvatar,
		file: null,
	});
	const [loading, update] = useRoutine(updateAvatarPromise, []);

	React.useEffect(() => {
		fileReader.onload = (e) => {
			setAvatar({ ...avatar, url: e.target?.result as string });
		};
	}, [avatar]);

	const prepareAvatarData = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setAvatar({ ...avatar, file: e.target.files[0], name: e.target.files[0].name });
			fileReader.readAsDataURL(e.target.files[0]);
		}
	}, []);

	const handleSubmit = React.useCallback(async () => {
		try {
			const url = await update({ name: avatar.name, data: avatar.file });
			setAvatar({ name: null, url, file: null });
			onUpload(url);
		} catch (error) {
			throw error;
		}
	}, [avatar]);

	const handleCancel = React.useCallback(() => {
		setAvatar({ name: null, file: null, url: avatarUrl || DefaultAvatar });
	}, []);

	return (
		<Form onSubmit={handleSubmit}>
			{({ handleSubmit }) => (
				<form className={styles.avatarForm} onSubmit={handleSubmit}>
					<img className={styles.avatar} src={avatar.url} />
					{loading ? (
						<span>Loading...</span>
					) : (
						<Field name='avatar'>
							{() => (
								<div className={styles.input}>
									<input onChange={prepareAvatarData} type='file' />
									<span>{avatar.name || 'Choose photo'}</span>
								</div>
							)}
						</Field>
					)}
					{avatar.file && !loading && (
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
