import * as React from 'react';
import useDropdown from 'use-dropdown';

import Input from '../Input/Input';

import styles from './Select.scss';

interface Props {
	value?: string;
	defaultValue?: string;
	options: string[];
	onChange?: (e: any) => void;
	searchable?: boolean;
}

const Select: React.FC<Props> = ({ options, defaultValue, value, searchable, onChange }) => {
	const [_value, setValue] = React.useState<string>(value || defaultValue || options[0] || '');
	const [searching, setSearching] = React.useState<boolean>(false);
	const [filteredValue, setFileteredValue] = React.useState<string>('');
	const [ref, isOpen, open, close] = useDropdown();

	return (
		<div className={styles.select} ref={ref}>
			<Input
				onChange={(e) => searchable && setFileteredValue(e.target.value)}
				className={styles.input}
				readOnly={!searchable}
				value={searching ? filteredValue : _value}
				onFocus={(e) => {
					searchable && setSearching(true);
					open(e);
				}}
				onBlur={() => searchable && setSearching(false)}
			/>
			{isOpen && (
				<div className={styles.options}>
					{options
						.filter((v) => v.toLowerCase().startsWith(filteredValue.toLowerCase()))
						.map((opt, idx) => (
							<div
								className={styles.option}
								key={idx}
								onMouseDown={(e) => {
									(e.target as any).value = opt;
									setValue(opt);
									onChange && onChange(e);
									searching && setSearching(false);
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
