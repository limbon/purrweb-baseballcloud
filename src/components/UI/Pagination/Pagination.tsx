import * as React from 'react';

import styles from './Pagination.scss';

interface Props {
	max: number;
	toShow: number;
	onChange: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ max, toShow, onChange }) => {
	const [currentPage, setCurrentPage] = React.useState<number>(0);
	const length = React.useMemo(() => Math.ceil(max / toShow), [max, toShow]);

	React.useEffect(() => {
		onChange(currentPage + 1);
	}, [currentPage]);

	return (
		<div className={styles.pagination}>
			<div className={styles.item} onClick={() => setCurrentPage(0)}>
				{'<<'}
			</div>
			{Array.from({ length }).map((_, n) => (
				<div
					className={`${styles.item} ${n === currentPage ? styles.active : null}`}
					onClick={() => setCurrentPage(n)}
					key={n}
				>
					{n + 1}
				</div>
			))}
			<div className={styles.item} onClick={() => setCurrentPage(length - 1)}>
				{'>>'}
			</div>
		</div>
	);
};

export default Pagination;
