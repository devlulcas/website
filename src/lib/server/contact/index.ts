import { MY_OWN_EMAIL, RESEND_API_KEY } from '$env/static/private';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(RESEND_API_KEY);

export const emailNotificationSchema = z.object({
	from: z.string().email(),
	subject: z.string(),
	content: z.string()
});

type EmailNotification = z.infer<typeof emailNotificationSchema>;

type EmailNotificationResult = {
	success: boolean;
	error?: string;
};

export async function sendEmailNotification(
	notification: EmailNotification
): Promise<EmailNotificationResult> {
	try {
		await resend.sendEmail({
			from: notification.from,
			to: MY_OWN_EMAIL,
			subject: notification.content,
			html: notification.content
		});

		return { success: true };
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		return { success: false, error: message };
	}
}
