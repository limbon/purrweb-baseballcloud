import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';

import { SchoolYear } from '../../../utils/enums';

import Select from '../../UI/Select/Select';

import styles from '../ProfileForm.scss';

const schoolYears = Object.entries(SchoolYear).map(([label, value]) => ({ label, value }));

const SchoolYearInput: React.FC<FieldRenderProps<any, HTMLElement>> = ({ input }) => {
	const [focus, setFocus] = React.useState<boolean>(false);
	const handleChange = React.useCallback((data: any) => {
		const e = { target: { value: data.value } };
		return input.onChange(e);
	}, []);

	return (
		<div className={styles.input}>
			<Select
				className={`${focus ? styles.select : ''}`}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
				placeholder='School years'
				options={schoolYears}
				isSearchable={false}
				value={schoolYears.find((y) => y.value === input.value)}
				defaultValue={schoolYears[0]}
				onChange={handleChange}
			/>
			<label className={focus ? styles.label : ''}>School Year</label>
		</div>
	);
};

export default SchoolYearInput;
