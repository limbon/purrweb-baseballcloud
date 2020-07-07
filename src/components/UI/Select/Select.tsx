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

const removeStyle = () => ({
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	padding: '0 2px',
	gridColumn: 1,
	borderRight: '1px solid rgba(0,126,255,.24)',
	':hover': {
		backgroundColor: 'rgba(0,113,230,.08)',
		color: '#0071e6',
	},
});

const valueStyle = () => ({
	display: 'grid',
	gridAutoFlow: 'column',
	alignItems: 'start',
	backgroundColor: 'rgba(0,126,255,.08)',
	borderRadius: '2px',
	border: '1px solid rgba(0,126,255,.24)',
	color: '#007eff',
	fontSize: '.9em',
	margin: '4px',
});

const valueLabelStyle = () => ({
	height: 'max-content',
	color: '#007eff',
	padding: '0 4px',
});

const controlStyle = () => ({
	maxWidth: '100%',
	display: 'flex',
	alignItems: 'center',
	minHeight: '38px',
	backgroundColor: '#eff1f3',
	borderColor: 'transparent',
});

const singleValueStyle = () => ({
	color: '#667784',
});

const optionStyle = (): any => ({
	padding: '8px',
	color: '#788b99',
	cursor: 'pointer',
	':hover': {
		backgroundColor: 'rgba(72, 187, 255, 0.1)',
	},
});

const Select: React.FC<Props> = (props) => {
	if (props.creatable) {
		return (
			<CreatableSelect
				styles={{
					multiValueRemove: removeStyle,
					multiValue: valueStyle,
					multiValueLabel: valueLabelStyle,
					control: controlStyle,
					singleValue: singleValueStyle,
					option: optionStyle,
				}}
				isClearable={false}
				{...(props as ReactSelectCreatableProps<
					OptionsType<{ label: string; value: string }>
				>)}
			/>
		);
	}

	return (
		<ReactSelect
			styles={{
				multiValueRemove: removeStyle,
				multiValue: valueStyle,
				multiValueLabel: valueLabelStyle,
				control: controlStyle,
				singleValue: singleValueStyle,
				option: optionStyle,
			}}
			isClearable={false}
			{...(props as ReactSelectProps)}
		/>
	);
};

export default Select;
