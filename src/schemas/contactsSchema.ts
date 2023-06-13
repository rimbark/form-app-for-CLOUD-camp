import validator from 'validator'
import { z } from 'zod'

export const contactsSchema = z.object({
  email: z.string().email(),
  phone: z.string().refine((phone) => validator.isMobilePhone(phone, 'ru-RU')),
})
