import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { OptionsType, ValueType } from 'react-select';

import Select from '../../../UI/Select/Select';

import styles from './ProfileSelectInput.scss';

type Props = FieldRenderProps<any, HTMLElement> & {
	label: string;
	options: OptionsType<{ label: string; value: string }>;
	defaultValue?: ValueType<{ label: string; value: string }>;
	value?: ValueType<{ label: string; value: string }>;
	getValue: (data: any) => any;
	changeDeps: any[];
	searchable?: boolean;
	multi?: boolean;
	loading?: boolean;
	hideSelected?: boolean;
	onInputChange?: (...args: any[]) => any;
	creatable?: boolean;
};

const ProfileSelectInput: React.FC<Props> = (props) => {
	const {
		input,
		options,
		defaultValue,
		label,
		getValue,
		changeDeps,
		searchable,
		multi,
		loading,
		hideSelected,
		onInputChange,
		creatable,
		value,
	} = props;

	const [focus, setFocus] = React.useState<boolean>(false);

	const handleChange = React.useCallback((data: any) => {
		const e = { target: { value: getValue(data) } };
		input.onChange(e);
	}, changeDeps);

	return (
		<div className={styles.input}>
			<Select
				creatable={creatable}
				className={`${focus ? styles.select : ''}`}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
				maxMenuHeight={128}
				isMulti={multi}
				isSearchable={searchable}
				hideSelectedOptions={hideSelected}
				onInputChange={onInputChange}
				isLoading={loading}
				options={options}
				placeholder={label}
				defaultValue={defaultValue}
				onChange={handleChange}
				value={value}
			/>
			<label className={focus ? styles.label : ''}>{label}</label>
		</div>
	);
};

export default ProfileSelectInput;
