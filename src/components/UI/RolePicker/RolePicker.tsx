import * as React from 'react';
import { upperFirst } from 'lodash';

import Checkbox from '../../../assets/icons/checkbox.svg';

import styles from './RolePicker.scss';

interface Props {
	value?: string;
	onChange: (e: any) => void;
	formatText: (role: string) => string;
	className?: string;
}

const roles = ['player', 'scout'];

const RolePicker: React.FC<Props> = ({ value, onChange, formatText, className }) => {
	const [active, setActive] = React.useState<string>(value || roles[0]);

	React.useEffect(() => {
		const e = { target: { value: active } };
		onChange && onChange(e);
	}, [active]);

	return (
		<div className={styles.picker}>
			{roles.map((role) => (
				<div
					key={role}
					className={`${styles.role} ${role === active ? styles.active : ''} ${
						className ?? ''
					}`}
					onClick={(e) => setActive(role)}
				>
					{role === active ? <Checkbox /> : null}
					<span>{formatText ? formatText(role) : upperFirst(role)}</span>
				</div>
			))}
		</div>
	);
};

export default RolePicker;
