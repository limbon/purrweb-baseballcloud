import * as React from 'react';
import useDropdown from 'use-dropdown';

import Input from '../Input/Input';

import styles from './Select.scss';

interface Props {
	value?: string;
	defaultValue?: string;
	options: string[];
	onChange?: (e: any) => void;
}

const Select: React.FC<Props> = ({ options, defaultValue, value, onChange }) => {
	const [_value, setValue] = React.useState<string>(value || defaultValue || options[0] || '');
	const [ref, isOpen, open, close] = useDropdown();

	return (
		<div className={styles.select} ref={ref}>
			<Input className={styles.input} readOnly value={_value} onFocus={open} />
			{isOpen && (
				<div className={styles.options}>
					{options.map((opt, idx) => (
						<div
							className={styles.option}
							key={idx}
							onClick={(e) => {
								(e.target as any).value = opt;
								setValue(opt);
								onChange && onChange(e);
								close();
							}}
						>
							{opt}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Select;
