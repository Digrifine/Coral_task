export default {
	formId: 'checkoutForm',
	formField: {
		salutation: {
			name: 'salutation',
			label: 'SALUTATION',
			requiredErrorMsg: 'Salutation is required',
		},
		firstName: {
			name: 'firstName',
			label: 'FIRST NAME',
			requiredErrorMsg: 'First name is required',
		},
		secondName: {
			name: 'secondName',
			label: 'SECOND NAME',
		},
		lastName: {
			name: 'lastName',
			label: 'LAST NAME',
			requiredErrorMsg: 'Last name is required',
		},
		company: {
			name: 'company',
			label: 'COMPANY',
			requiredErrorMsg: 'Company is required',
		},
		title: {
			name: 'title',
			label: 'TITLE',
			requiredErrorMsg: 'Title is required',
		},
		email: {
			name: 'email',
			label: 'EMAIL',
			requiredErrorMsg: 'Email is required',
			invalidErrorMsg: 'Email address is not valid (e.g. example@mail.com)',
		},
		confirmEmail: {
			name: 'confirmEmail',
			label: 'CONFIRM EMAIL',
			requiredErrorMsg: 'Email is required',
			invalidErrorMsg: 'Emails must matches',
		},
		phone: {
			name: 'phone',
			label: 'PHONE',
			requiredErrorMsg: 'Phone is required',
			invalidErrorMsg: 'Phone is not valid (e.g. (910)456-7890)',
		},
		fax: {
			name: 'fax',
			label: 'FAX',
		},
		mobile: {
			name: 'mobile',
			label: 'MOBILE',
		},
		areasOption: {
			name: 'areas',
			label: 'Areas',
			requiredErrorMsg: 'Please select your personal business area.',
		},
		Finance: {
			name: 'Finance',
			label: 'Finance',
		},
		Operations: {
			name: 'Operations',
			label: 'Operations',
		},
		IT: {
			name: 'IT',
			label: 'IT',
		},
		Sales: {
			name: 'Sales',
			label: 'Sales',
		},
		Administrative: {
			name: 'Administrative',
			label: 'Administrative',
		},
		Legal: {
			name: 'Legal',
			label: 'Legal',
		},
		Marketing: {
			name: 'Marketing',
			label: 'Marketing',
		},
		comments: {
			name: 'comments',
			label: 'Comments',
			requiredErrorMsg: 'Comments field is required',
		},
		country: {
			name: 'country',
			label: 'COUNTRY',
			requiredErrorMsg: 'Country is required',
		},
		officeName: {
			name: 'officeName',
			label: 'OFFICE NAME',
			requiredErrorMsg: 'Office Name is required',
		},
		address: {
			name: 'address',
			label: 'ADDRESS',
			requiredErrorMsg: 'Address is required',
		},
		postalCode: {
			name: 'postalCode',
			label: 'POSTAL CODE',
			requiredErrorMsg: 'Postal Code is required',
			invalidErrorMsg: 'Invalid Postal Code',
		},
		city: {
			name: 'city',
			label: 'CITY',
			requiredErrorMsg: 'City is required',
		},
		state: {
			name: 'state',
			label: 'STATE',
			requiredErrorMsg: 'State is required',
		},
		password: {
			name: 'password',
			label: 'PASSWORD',
			requiredErrorMsg: 'Password is required',
			invalidErrorMsg: 'Invalid password',
		},
		confirmPassword: {
			name: 'confirmPassword',
			label: 'CONFIRM PASSWORD',
			requiredErrorMsg: 'Password is required',
			invalidErrorMsg: 'Passwords must matches',
		},
		captcha: {
			name: 'captcha',
			label: 'CAPTCHA',
			requiredErrorMsg: 'Captcha is required',
			invalidErrorMsg: 'Captcha is not match',
		},
		termsOFUse: {
			name: 'termsOfUse',
			label: 'I have read and accept the terms of use',
			requiredErrorMsg: 'Accepting is required',
		},
	},
};
