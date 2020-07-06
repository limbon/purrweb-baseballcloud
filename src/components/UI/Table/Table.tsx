import * as React from 'react';
import { startCase } from 'lodash';

import styles from './Table.scss';

interface Props {
	data: any[];
	render?: any[];
	onRowClick?: (data: any) => void;
}

const Table: React.FC<Props> = ({ data, onRowClick, render }) => {
	const columnNames = React.useMemo(() => {
		if (render) {
			return Object.keys(render[0]);
		} else {
			return Object.keys(data[0]);
		}
	}, [data, render]);

	return (
		<div className={styles.table}>
			<div className={styles.heading}>
				{columnNames.map((heading) => (
					<div className={styles.headingItem} key={heading}>
						{startCase(heading)}
					</div>
				))}
			</div>
			<div className={styles.rows}>
				{render
					? render.map((row, idx) => (
							<div onClick={() => onRowClick && onRowClick(data[idx])} className={styles.row}>
								{Object.values(row).map((value: any) => (
									<div className={styles.value}>{value}</div>
								))}
							</div>
					  ))
					: data.map((row) => (
							<div onClick={() => onRowClick && onRowClick(row)} className={styles.row}>
								{Object.values(row).map((value: any) => (
									<div className={styles.value}>{value}</div>
								))}
							</div>
					  ))}
			</div>
		</div>
	);
};

export default Table;
