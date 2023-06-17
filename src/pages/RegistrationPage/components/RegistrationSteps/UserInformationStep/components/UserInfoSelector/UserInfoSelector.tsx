import {
  FormControl,
  FormHelperText,
  FormLabel,
  Select,
} from '@chakra-ui/react'
import { SexNames } from 'pages/RegistrationPage/components/RegistrationSteps/UserInformationStep/userInformationStep.constants'
import React from 'react'
import { UseFormRegister } from 'react-hook-form'
import { UserInformationDataType } from 'types/steps.types'

interface FormItemPropsType {
  register: UseFormRegister<UserInformationDataType>
  sex: 'man' | 'woman' | null
  error?: string
}

export const UserInfoSelector = ({
  register,
  sex,
  error,
}: FormItemPropsType) => {
  return (
    <FormControl>
      <FormLabel fontSize="14px">Sex</FormLabel>
      <Select
        id="field-sex"
        {...register('sex', { required: 'Require to fill' })}
        defaultValue={sex ? (sex as string) : 'Не выбрано'}
      >
        <option value="defaultOption" hidden>
          Не выбрано
        </option>
        <option id="field-sex-option-man" value={SexNames.MAN}>
          {SexNames.MAN}
        </option>
        <option id="field-sex-option-woman" value={SexNames.WOMAN}>
          {SexNames.WOMAN}
        </option>
      </Select>
      <FormHelperText fontSize="12px">{error && 'Select one'}</FormHelperText>
    </FormControl>
  )
}
