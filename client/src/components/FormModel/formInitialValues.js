import checkoutFormModel from './checkoutFormModel';
const {
	formField: {
		salutation,
		firstName,
		secondName,
		lastName,
		company,
		title,
		email,
		confirmEmail,
		phone,
		fax,
		mobile,
		Finance,
		Operations,
		IT,
		Sales,
		Administrative,
		Legal,
		Marketing,
		comments,
		country,
		officeName,
		address,
		postalCode,
		city,
		state,
		password,
		confirmPassword,
		captcha,
	},
} = checkoutFormModel;

export default {
	[salutation.name]: '',
	[firstName.name]: '',
	[secondName.name]: '',
	[lastName.name]: '',
	[company.name]: '',
	[title.name]: '',
	[email.name]: '',
	[confirmEmail.name]: '',
	[phone.name]: '',
	[fax.name]: '',
	[mobile.name]: '',
	[Finance.name]: false,
	[Operations.name]: false,
	[IT.name]: false,
	[Sales.name]: false,
	[Administrative.name]: false,
	[Legal.name]: false,
	[Marketing.name]: false,
	[comments.name]: '',
	[country.name]: '',
	[officeName.name]: '',
	[address.name]: '',
	[postalCode.name]: '',
	[city.name]: '',
	[state.name]: '',
	[password.name]: '',
	[confirmPassword.name]: '',
	[captcha.name]: '',
};
