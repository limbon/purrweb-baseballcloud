import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';

import Input from '../../UI/Input/Input';

const InchesInput: React.FC<FieldRenderProps<any, HTMLElement>> = ({ input }) => {
	return <Input {...input} placeholder='Inches' />;
};

export default InchesInput;
