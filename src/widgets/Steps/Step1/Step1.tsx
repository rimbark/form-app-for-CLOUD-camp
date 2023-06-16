import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { NavButtonBack } from '../../../components/NavButtons/NavButtonBack/NavButtonBack'
import { NavButtonForward } from '../../../components/NavButtons/NavButtonForward/NavButtonForward'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { addData } from '../../../redux/reducers/step1Slice'
import { step1Schema } from '../../../schemas/step1Schema'
import { InitialStep1Type } from '../../../types/steps.types'
import { StepsPropsTypes } from '../stepsProps.types'
import { sexNames } from './step1.constants'
import styles from './Step1.module.scss'

export const Step1 = ({ navigate }: StepsPropsTypes) => {
  const { container, buttonsContainer, formContainer } = styles
  const dispatch = useAppDispatch()

  const step1InitialValue = useAppSelector((state) => state.step1Reducer)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: zodResolver(step1Schema),
    defaultValues: step1InitialValue,
    reValidateMode: 'onBlur',
  })

  const onSubmit = (data: InitialStep1Type) => {
    dispatch(addData(data))
    navigate('registration/step_2/')
  }

  return (
    <form className={container} onSubmit={handleSubmit(onSubmit)}>
      <div className={formContainer}>
        <FormControl>
          <FormLabel fontSize="14px">Nickname</FormLabel>
          <Input
            placeholder="Placeholder"
            id="field-nickname"
            type="nickname"
            {...register('nickname')}
          />
          <FormHelperText fontSize="12px">
            {errors.nickname?.message}
          </FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="14px">Name</FormLabel>
          <Input
            placeholder="Placeholder"
            id="field-name"
            type="name"
            {...register('name')}
          />
          <FormHelperText fontSize="12px">
            {errors.name?.message}
          </FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="14px">Sername</FormLabel>
          <Input
            placeholder="Placeholder"
            id="field-sername"
            type="sername"
            {...register('sername')}
          />
          <FormHelperText fontSize="12px">
            {errors.sername?.message}
          </FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="14px">Sex</FormLabel>
          <Select
            id="field-sex"
            {...register('sex', { required: 'Require to fill' })}
            defaultValue={
              step1InitialValue.sex
                ? (step1InitialValue.sex as string)
                : 'Не выбрано'
            }
          >
            <option value="defaultOption" hidden>
              Не выбрано
            </option>
            <option id="field-sex-option-man" value={sexNames.MAN}>
              {sexNames.MAN}
            </option>
            <option id="field-sex-option-woman" value={sexNames.WOMAN}>
              {sexNames.WOMAN}
            </option>
          </Select>
          <FormHelperText fontSize="12px">
            {errors.sex?.message && 'Select one'}
          </FormHelperText>
        </FormControl>
      </div>
      <div className={buttonsContainer}>
        <NavButtonBack />
        <NavButtonForward />
      </div>
    </form>
  )
}
