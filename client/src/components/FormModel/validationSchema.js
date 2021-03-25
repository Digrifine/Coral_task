import * as Yup from 'yup';
import checkoutFormModel from './checkoutFormModel';
const {
	formField: {
		salutation,
		firstName,
		lastName,
		company,
		title,
		email,
		confirmEmail,
		phone,
		//areasOption,
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

const emailRegEx = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const phoneRegEx = /^[\\(]{0,1}([0-9]){3}[\\)]{0,1}[ ]?([^0-1]){1}([0-9]){2}[ ]?[-]?[ ]?([0-9]){4}[ ]*((x){0,1}([0-9]){1,5}){0,1}$/;
const postalCodeRegEx = /^[0-9]{5}(?:-[0-9]{4})?$/;
const passwordRegEx = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
const captchaRegEx = 'W68HP';

export default [
	Yup.object().shape({
		[salutation.name]: Yup.string().required(`${salutation.requiredErrorMsg}`),
		[firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
		[lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
		[company.name]: Yup.string().required(`${company.requiredErrorMsg}`),
		[title.name]: Yup.string().required(`${title.requiredErrorMsg}`),
		[email.name]: Yup.string()
			.required(`${email.requiredErrorMsg}`)
			.matches(emailRegEx, email.invalidErrorMsg),
		[confirmEmail.name]: Yup.string()
			.required(`${confirmEmail.requiredErrorMsg}`)
			.matches(email, confirmEmail.invalidErrorMsg),
		[phone.name]: Yup.string()
			.required(`${phone.requiredErrorMsg}`)
			.matches(phoneRegEx, phone.invalidErrorMsg),
	}),
	Yup.object().shape({
		//[areasOption.name]: Yup.array().required(`${areasOption.requiredErrorMsg}`),
		[comments.name]: Yup.string().required(`${comments.requiredErrorMsg}`),
	}),
	Yup.object().shape({
		[country.name]: Yup.string().required(`${country.requiredErrorMsg}`),
		[officeName.name]: Yup.string().required(`${officeName.requiredErrorMsg}`),
		[address.name]: Yup.string().required(`${address.requiredErrorMsg}`),
		[postalCode.name]: Yup.string()
			.required(`${postalCode.requiredErrorMsg}`)
			.matches(postalCodeRegEx, postalCode.invalidErrorMsg),
		[city.name]: Yup.string().required(`${city.requiredErrorMsg}`),
		[state.name]: Yup.string().required(`${state.requiredErrorMsg}`),
	}),
	Yup.object().shape({
		[password.name]: Yup.string()
			.required(`${password.requiredErrorMsg}`)
			.matches(passwordRegEx, password.invalidErrorMsg),
		[confirmPassword.name]: Yup.string()
			.required(`${confirmPassword.requiredErrorMsg}`)
			.matches(password, confirmPassword.invalidErrorMsg),
		[captcha.name]: Yup.string()
			.required(`${captcha.requiredErrorMsg}`)
			.matches(captchaRegEx, captcha.invalidErrorMsg),
	}),
];
