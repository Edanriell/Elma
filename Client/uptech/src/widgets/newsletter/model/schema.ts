import * as yup from "yup";

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z]+(\.[A-Za-z]+)*\.[A-Za-z]{2,}$/;

export const newsletterFormSchema = yup
	.object({
		email: yup
			.string()
			.required("* Email address is required")
			.matches(emailRegex, "* Please provide a valid email address")
	})
	.required();
