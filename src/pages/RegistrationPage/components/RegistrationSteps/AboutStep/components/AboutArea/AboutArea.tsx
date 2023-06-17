import {
  FormControl,
  FormHelperText,
  FormLabel,
  Text,
  Textarea,
} from '@chakra-ui/react'
import React from 'react'
import { UseFormRegister, UseFormWatch } from 'react-hook-form'
import { AboutDataType } from 'types/steps.types'

interface FormItemPropsType {
  register: UseFormRegister<AboutDataType>
  watch: UseFormWatch<AboutDataType>
  error?: string
}

export const AboutArea = ({ register, watch, error }: FormItemPropsType) => {
  return (
    <FormControl>
      <FormLabel>About</FormLabel>
      <Textarea
        id="field-about"
        {...register('about')}
        resize="vertical"
        height="85px"
      />
      <Text mt="5px">
        {watch('about') ? watch('about').replace(/\s/g, '').length : ''}
      </Text>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  )
}
