import { z } from 'zod'

export const aboutStepSchema = z.object({
  about: z.string().max(200, { message: 'Max count 200 symbols' }),
})
