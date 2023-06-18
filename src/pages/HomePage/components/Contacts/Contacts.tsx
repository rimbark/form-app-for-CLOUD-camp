import { FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import {
  MAIL_PLACEHOLDER,
  NUMBER_INPUT_MASK,
  NUMBER_PLACEHOLDER,
} from 'pages/HomePage/components/Contacts/contacts.constants'
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { useNavigate } from 'react-router-dom'
import { selectContacts } from 'redux/form.selectors'
import { addContactsData } from 'redux/reducers/formSlice'
import { contactsSchema } from 'schemas/contactsSchema'
import { ContactsDataType } from 'types/steps.types'
import styles from './Contacts.module.scss'

export const Contacts = () => {
  const { container, buttonStart } = styles
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const initialValues = useAppSelector(selectContacts)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactsDataType>({
    mode: 'onBlur',
    resolver: zodResolver(contactsSchema),
    defaultValues: initialValues,
    reValidateMode: 'onSubmit',
  })

  const onSubmit = (data: ContactsDataType) => {
    dispatch(addContactsData(data))
    navigate('registration/step_1')
  }

  return (
    <form className={container} onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel>Номер телефона</FormLabel>
        <Input
          autoComplete="true"
          as={InputMask}
          mask={NUMBER_INPUT_MASK}
          maskChar={null}
          placeholder={NUMBER_PLACEHOLDER}
          {...register('phone', {
            required: true,
          })}
        />
        <FormHelperText color="red.400">{errors.phone?.message}</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          autoComplete="true"
          variant="outline"
          backgroundColor="#0000000A"
          type="email"
          {...register('email', {
            required: true,
          })}
          placeholder={MAIL_PLACEHOLDER}
        />
        <FormHelperText color="red.400">{errors.email?.message}</FormHelperText>
      </FormControl>
      <button id="button-start" type="submit" className={buttonStart}>
        Начать
      </button>
    </form>
  )
}
