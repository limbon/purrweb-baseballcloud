import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';

import Input from '../../UI/Input/Input';

const FeetInput: React.FC<FieldRenderProps<any, HTMLElement>> = ({ input }) => {
	return <Input {...input} placeholder='Feet' />;
};

export default FeetInput;
