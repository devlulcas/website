interface SendMailParams {
	name: string;
	message: string;
	email: string;
}

export async function sendMail(data: SendMailParams) {
	const { name, message, email } = data;

	console.log(name, message, email);

	return {
		statusCode: 200,
		message: 'Email sent successfully'
	};
}
