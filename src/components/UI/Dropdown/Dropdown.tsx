import * as React from 'react';
import useDropdown from 'use-dropdown';

import styles from './Dropdown.scss';

interface Props {
	title?: string | JSX.Element;
	options: any[];
}

const Dropdown: React.FC<Props> = ({ title, options }) => {
	const [ref, isOpen, open, close] = useDropdown();

	return (
		<div className={styles.dropdown} ref={ref} onClick={(e) => (isOpen ? close(e) : open(e))}>
			<div className={styles.title}>{title || options[0] || ''}</div>
			{isOpen && (
				<div className={styles.options}>
					{options.map((opt) => (
						<div className={styles.option}>{opt}</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Dropdown;
