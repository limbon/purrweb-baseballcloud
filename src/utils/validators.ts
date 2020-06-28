export const isEmail = (value: string) => {
	// RFC 5322
	const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
	if (!regex.test(value)) {
		return 'Invalid email address';
	}
};

export const minLength = (length: number) => {
	return (value: string) => {
		if (value && value.length < length) {
			return `This field requires minimum ${length} characters`;
		}
	};
};

export const equalFields = (field1: string, field2: string, message?: string) => {
	return (fields: any) => {
		if (fields[field1] !== fields[field2]) {
			return {
				inequalFields: message || 'Invalid fields',
			};
		}
	};
};
