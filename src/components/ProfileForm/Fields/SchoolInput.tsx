import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';

import { useSchools } from '../../../hooks/useSchools';

import Select from '../../UI/Select/Select';

import styles from '../ProfileForm.scss';

const SchoolInput: React.FC<FieldRenderProps<any, HTMLElement>> = ({ input }) => {
	const { schools, schoolOptions, requestMoreSchools, schoolLoading } = useSchools();
	const [focus, setFocus] = React.useState<boolean>(false);

	const handleChange = React.useCallback(
		(data: any) => {
			const school = schools[data?.value] || { id: data.value, name: data.value };
			const e = { target: { value: school } };
			return input.onChange(e);
		},
		[schools],
	);

	return (
		<div className={styles.input}>
			<Select
				className={`${focus ? styles.select : ''}`}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
				creatable
				options={schoolOptions}
				value={{ label: input.value.name, value: input.value.name }}
				placeholder='School'
				onInputChange={requestMoreSchools}
				isLoading={schoolLoading}
				onChange={handleChange}
			/>
			<label className={focus ? styles.label : ''}>School</label>
		</div>
	);
};

export default SchoolInput;
