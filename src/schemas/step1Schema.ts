import { SexNames } from 'pages/RegistrationPage/components/RegistrationSteps/RegistrationStep1/registrationStep1.constants'
import { z } from 'zod'

export const step1Schema = z.object({
  nickname: z
    .string()
    .min(1, { message: 'Required field to fill' })
    .max(30, { message: 'Must be 30 or fewer characters long' })
    .regex(
      /^[a-zA-Zа-яА-Я0-9]+$/,
      'The username must contain only letters and numbers'
    ),
  name: z
    .string()
    .min(1, { message: 'Required field to fill' })
    .max(50, { message: 'Must be 50 or fewer characters long' })
    .regex(/^[a-zA-Zа-яА-Я]+$/, 'The username must contain only letters'),
  sername: z
    .string()
    .min(1, { message: 'Required field to fill' })
    .max(50, { message: 'Must be 50 or fewer characters long' })
    .regex(/^[a-zA-Zа-яА-Я]+$/, 'The username must contain only letters'),
  sex: z.nativeEnum(SexNames),
})
