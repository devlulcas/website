import { z } from 'zod';

export const emailNotificationSchema = z.object({
  subject: z.string(),
  content: z.string(),
});

export type EmailNotificationSchema = z.infer<typeof emailNotificationSchema>;
