import { FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'
import { UseFormRegister } from 'react-hook-form'
import { UserInformationDataType } from 'types/steps.types'

interface FormItemPropsType {
  register: UseFormRegister<UserInformationDataType>
  type: keyof UserInformationDataType
  id: string
  error?: string
  name: string
}

export const UserInfoInput = ({
  register,
  id,
  type,
  error,
  name,
}: FormItemPropsType) => {
  return (
    <FormControl>
      <FormLabel fontSize="14px" htmlFor={id}>
        {name}
      </FormLabel>
      <Input
        autoComplete="true"
        placeholder="Placeholder"
        id={id}
        type={type}
        {...register(type)}
      />
      <FormHelperText fontSize="12px">{error}</FormHelperText>
    </FormControl>
  )
}
