import { SexNames } from 'pages/RegistrationPage/components/RegistrationSteps/UserInformationStep/userInformationStep.constants'
import { z } from 'zod'

export const userInfoStepSchema = z.object({
  nickname: z
    .string()
    .min(1, { message: 'Required field to fill' })
    .max(30, { message: 'Max 30 symbols' })
    .regex(
      /^[a-zA-Zа-яА-Я0-9]+$/,
      'The username must contain only letters and numbers'
    ),
  name: z
    .string()
    .min(1, { message: 'Required field to fill' })
    .max(50, { message: 'Max 50 symbols' })
    .regex(/^[a-zA-Zа-яА-Я]+$/, 'The username must contain only letters'),
  sername: z
    .string()
    .min(1, { message: 'Required field to fill' })
    .max(50, { message: 'Max 50 symbols' })
    .regex(/^[a-zA-Zа-яА-Я]+$/, 'The username must contain only letters'),
  sex: z.nativeEnum(SexNames),
})
