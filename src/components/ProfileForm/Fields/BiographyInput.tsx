import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';

const BiographyInput: React.FC<FieldRenderProps<any, HTMLElement>> = ({ input }) => {
	return <textarea placeholder='Describe yourself in a few words' {...input}></textarea>;
};

export default BiographyInput;
