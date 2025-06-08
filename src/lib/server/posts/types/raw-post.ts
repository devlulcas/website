import type { z } from 'zod';
import type { rawPostSchema } from '../schemas/raw-post-schema';

export type RawPost = z.infer<typeof rawPostSchema>;
