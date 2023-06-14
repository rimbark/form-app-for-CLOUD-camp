import { FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { addContactsData } from '../../redux/reducers/contactsSlice'
import { contactsSchema } from '../../schemas/contactsSchema'
import { ContactsDataTypes } from '../../types/contactsData.types'
import styles from './Contacts.module.scss'

export const Contacts = () => {
  const { container, buttonStart } = styles
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const initialData = useAppSelector((state) => state.contactsReducer)
  const [contactsData, setContactsData] =
    useState<ContactsDataTypes>(initialData)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: zodResolver(contactsSchema),
    defaultValues: contactsData,
    reValidateMode: 'onSubmit',
  })

  const onSubmit = (data: ContactsDataTypes) => {
    dispatch(addContactsData(data))
    navigate('registration/step_1')
  }

  useEffect(() => {
    setContactsData(initialData)
  }, [])
  console.log(errors)
  return (
    <form className={container} onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel>Номер телефона</FormLabel>
        <Input
          variant="outline"
          backgroundColor="#0000000A"
          type="phone"
          {...register('phone', {
            required: true,
          })}
          placeholder="+7 999 999-99-99"
        />
        <FormHelperText color="red.400">{errors.phone?.message}</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          variant="outline"
          backgroundColor="#0000000A"
          type="email"
          {...register('email', {
            required: true,
          })}
          placeholder="tim.jennings@example.com"
        />
        <FormHelperText color="red.400">{errors.email?.message}</FormHelperText>
      </FormControl>
      <button id="button-start" type="submit" className={buttonStart}>
        Начать
      </button>
    </form>
  )
}
