import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';

import Input from '../../UI/Input/Input';

const FirstNameInput: React.FC<FieldRenderProps<any, HTMLElement>> = ({ input }) => {
	return <Input {...input} placeholder='First Name' />;
};

export default FirstNameInput;
