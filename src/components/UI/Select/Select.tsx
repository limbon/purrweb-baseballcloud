import * as React from 'react';
import ReactSelect, { OptionsType, Props as ReactSelectProps } from 'react-select';
import CreatableSelect, {
	CreatableProps as ReactSelectCreatableProps,
} from 'react-select/creatable';

type SelectProps = ReactSelectProps;
type CreatableProps = ReactSelectCreatableProps<OptionsType<{ label: string; value: string }>>;

type Props = SelectProps &
	CreatableProps & {
		creatable?: boolean;
	};

const Select: React.FC<Props> = (props) => {
	if (props.creatable) {
		return (
			<CreatableSelect
				{...(props as ReactSelectCreatableProps<
					OptionsType<{ label: string; value: string }>
				>)}
				isClearable={false}
			/>
		);
	}

	return <ReactSelect {...(props as ReactSelectProps)} isClearable={false} />;
};

export default Select;
