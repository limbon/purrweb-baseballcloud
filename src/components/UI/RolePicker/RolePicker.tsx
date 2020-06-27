import * as React from 'react';
import { upperFirst } from 'lodash';

import { Role } from '../../../utils/enums';

import Checkbox from '../../../assets/icons/checkbox.svg';

import styles from './RolePicker.scss';

interface Props {
	onChange?: (e: React.ChangeEvent<any>) => void;
	value?: Role;
	formatText?: (role: Role) => string;
	className?: string;
}

const roles = Object.values(Role);

const RolePicker: React.FC<Props> = ({ value, onChange, formatText, className }) => {
	const [active, setActive] = React.useState<Role>(value || roles[0]);

	return (
		<div className={styles.picker}>
			{roles.map((role) => (
				<div
					key={role}
					className={`${styles.role} ${role === active ? styles.active : ''} ${
						className ?? ''
					}`}
					onClick={(e) => {
						(e.target as any).value = role;
						setActive(role);
						onChange && onChange(e);
					}}
				>
					{role === active ? <Checkbox /> : null}
					<span>{formatText ? formatText(role) : upperFirst(role)}</span>
				</div>
			))}
		</div>
	);
};

export default RolePicker;
