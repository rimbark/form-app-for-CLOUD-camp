import { NavButtonBack } from 'components/NavButtons/NavButtonBack/NavButtonBack'
import { NavButtonForward } from 'components/NavButtons/NavButtonForward/NavButtonForward'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { AdvantagesFormsDataType } from 'pages/RegistrationPage/components/RegistrationSteps/AdvantagesStep/advantagesStep.types'
import { AdvantagesRadioGroup } from 'pages/RegistrationPage/components/RegistrationSteps/AdvantagesStep/components/AdvantagesRadioGroup/AdvantagesRadioGroup'
import { CheckBoxGroup } from 'pages/RegistrationPage/components/RegistrationSteps/AdvantagesStep/components/CheckboxGroup/CheckBoxGroup'
import { FieldArray } from 'pages/RegistrationPage/components/RegistrationSteps/AdvantagesStep/components/FieldArray/FieldArray'
import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { selectAdvantages } from 'redux/form.selectors'
import { addAdvantagesData } from 'redux/reducers/formSlice'
import { RegistrationStepsPropsTypes } from '../registrationStepsProps.types'
import styles from './AdvantagesStep.module.scss'

export const AdvantagesStep = ({ navigate }: RegistrationStepsPropsTypes) => {
  const { container, formContainer, buttonsContainer } = styles
  const dispatch = useAppDispatch()
  const initialValues = useAppSelector(selectAdvantages)
  const refactoredAdvantages = initialValues.advantages.map((value) => {
    return { value }
  })

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdvantagesFormsDataType>({
    defaultValues: {
      advantages: refactoredAdvantages,
    },
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  })
  const { fields, append, remove } = useFieldArray({
    name: 'advantages',
    control,
  })
  const onSubmit = ({
    advantages,
    checkBoxes,
    radio,
  }: AdvantagesFormsDataType) => {
    const refactoredData = {
      advantages: advantages.map((item) => item.value),
      checkBoxes: checkBoxes
        .filter((item) => typeof item === 'string')
        .map(Number),
      radio: Number(radio),
    }
    dispatch(addAdvantagesData(refactoredData))
    navigate('registration/step_3/')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={container}>
      <div className={formContainer}>
        <FieldArray
          register={register}
          fields={fields}
          remove={remove}
          append={append}
          error={errors.advantages}
        />
        <CheckBoxGroup
          register={register}
          checkBoxes={initialValues.checkBoxes}
        />
        <AdvantagesRadioGroup register={register} radio={initialValues.radio} />
        <div className={buttonsContainer}>
          <NavButtonBack />
          <NavButtonForward />
        </div>
      </div>
    </form>
  )
}
