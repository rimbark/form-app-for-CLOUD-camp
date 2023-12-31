import { zodResolver } from '@hookform/resolvers/zod'
import { NavButtonBack } from 'components/NavButtons/NavButtonBack/NavButtonBack'
import { NavButtonForward } from 'components/NavButtons/NavButtonForward/NavButtonForward'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { UserInfoInput } from 'pages/RegistrationPage/components/RegistrationSteps/UserInformationStep/components/UserInfoInput/UserInfoInput'
import { UserInfoSelector } from 'pages/RegistrationPage/components/RegistrationSteps/UserInformationStep/components/UserInfoSelector/UserInfoSelector'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { selectUserInformation } from 'redux/form.selectors'
import { addUserInformationData } from 'redux/reducers/formSlice'
import { stepForward } from 'redux/reducers/stepperSlice'
import { userInfoStepSchema } from 'schemas/userInfoStepSchema'
import { UserInformationDataType } from 'types/steps.types'
import styles from './UserInformationStep.module.scss'

export const UserInformationStep = () => {
  const { container, buttonsContainer, formContainer } = styles
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const initialValues = useAppSelector(selectUserInformation)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInformationDataType>({
    mode: 'onBlur',
    resolver: zodResolver(userInfoStepSchema),
    defaultValues: initialValues,
    reValidateMode: 'onBlur',
  })

  const onSubmit = (data: UserInformationDataType) => {
    dispatch(addUserInformationData(data))
    dispatch(stepForward())
    navigate('/registration/step_2/')
  }

  return (
    <form className={container} onSubmit={handleSubmit(onSubmit)}>
      <div className={formContainer}>
        <UserInfoInput
          register={register}
          type="nickname"
          id="field-nickname"
          name="Nickname"
          error={errors.nickname?.message}
        />
        <UserInfoInput
          register={register}
          type="name"
          id="field-name"
          name="Name"
          error={errors.name?.message}
        />
        <UserInfoInput
          register={register}
          type="sername"
          id="field-sername"
          name="Sername"
          error={errors.sername?.message}
        />
        <UserInfoSelector
          register={register}
          sex={initialValues.sex}
          error={errors.sex?.message}
        />
      </div>
      <div className={buttonsContainer}>
        <NavButtonBack />
        <NavButtonForward />
      </div>
    </form>
  )
}
