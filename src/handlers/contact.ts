import { error } from '@sveltejs/kit';
import { z, ZodError } from 'zod';
import { sendMail } from './email';

interface ContactHandlerParams {
	request: Request;
}

const formDataSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	message: z.string()
});

export const contactHandler = async ({ request }: ContactHandlerParams) => {
	const { formData } = request;

	const data = await formData();

	const name = data.get('name');
	const email = data.get('email');
	const message = data.get('message');

	try {
		const parsedData = formDataSchema.parse({ name, email, message });

		await sendMail(parsedData);
	} catch (err) {
		if (err instanceof ZodError) {
			throw error(400, err.message);
		}

		if (err instanceof Error) {
			throw error(400, err.message);
		}

		throw error(500, 'Unknown error');
	}
};
