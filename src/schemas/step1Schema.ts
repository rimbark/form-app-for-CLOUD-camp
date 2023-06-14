import { z } from 'zod'
import { sexNames } from '../widgets/Steps/Step1/step1.constants'

export const step1Schema = z.object({
  nickname: z
    .string()
    .min(1, { message: 'Required field to fill' })
    .max(30, { message: 'Must be 30 or fewer characters long' })
    .regex(
      /^[a-zA-Z0-9]+$/,
      'The username must contain only letters and numbers'
    ),
  name: z
    .string()
    .min(1, { message: 'Required field to fill' })
    .max(50, { message: 'Must be 50 or fewer characters long' })
    .regex(/^[a-zA-Z]+$/, 'The username must contain only letters'),
  sername: z
    .string()
    .min(1, { message: 'Required field to fill' })
    .max(50, { message: 'Must be 50 or fewer characters long' })
    .regex(/^[a-zA-Z]+$/, 'The username must contain only letters'),
  sex: z.nativeEnum(sexNames),
})
