import * as React from 'react';

import { TableData, TableColumn } from 'baseballcloud/types';

import Loading from '../../Loading/Loading';

import styles from './Table.scss';

interface Props {
	data: TableData<any>[];
	columns: TableColumn[];
	onRowClick?: (data: any) => void;
	loading?: boolean;
}

const Table: React.FC<Props> = ({ data, columns, onRowClick, loading }) => {
	if (loading) {
		return (
			<div className={styles.table}>
				<div className={styles.loading}>
					<Loading size='7x' />
				</div>
			</div>
		);
	}

	return (
		<div className={styles.table}>
			<div className={styles.heading}>
				{columns.map((c) => (
					<div className={styles.headingItem} key={c.key}>
						{c.title}
					</div>
				))}
			</div>
			<div className={styles.rows}>
				{data.map((dataObject) => (
					<div key={dataObject.key} className={styles.row}>
						{columns.map((column) => (
							<div
								key={`${dataObject.key}_${column.dataIndex}_${dataObject[column.dataIndex]}`}
								onClick={() => onRowClick && onRowClick(dataObject)}
								className={styles.value}
							>
								{dataObject[column.dataIndex]}
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default Table;
