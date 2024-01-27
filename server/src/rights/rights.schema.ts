import { z } from 'zod';

//
export const RightCreateSchema = z
  .object({
    name: z.string().min(1, 'Name is required'),
  })
  .required();
