import { z } from 'zod';

export const messageSchema = z.object({
	email: z.string().email(),
	name: z.string(),
	message: z.string()
});
