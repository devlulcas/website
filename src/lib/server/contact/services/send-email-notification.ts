import { MY_OWN_EMAIL, RESEND_API_KEY } from '$env/static/private';
import { Resend } from 'resend';
import type { EmailNotificationSchema } from '../schemas/email-notification-schema';

const resend = new Resend(RESEND_API_KEY);

type EmailNotificationResult = {
  success: boolean;
  error?: string;
};

export async function sendEmailNotification(notification: EmailNotificationSchema): Promise<EmailNotificationResult> {
  try {
    await resend.sendEmail({
      from: 'onboarding@resend.dev',
      to: [MY_OWN_EMAIL],
      subject: notification.content,
      html: notification.content,
    });

    return { success: true };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return { success: false, error: message };
  }
}
