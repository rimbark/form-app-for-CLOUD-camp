import { zodResolver } from '@hookform/resolvers/zod'
import { unwrapResult } from '@reduxjs/toolkit'
import { NavButtonBack } from 'components/NavButtons/NavButtonBack/NavButtonBack'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { SendFormButton } from 'pages/RegistrationPage/components/FinalButtons/SendFormButton/SendFormButton'
import { ModalDone } from 'pages/RegistrationPage/components/ModalDone/ModalDone'
import { ModalFail } from 'pages/RegistrationPage/components/ModalFalse/ModalFail'
import { AboutArea } from 'pages/RegistrationPage/components/RegistrationSteps/AboutStep/components/AboutArea/AboutArea'
import { RegistrationStepsPropsTypes } from 'pages/RegistrationPage/components/RegistrationSteps/registrationStepsProps.types'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { selectAbout } from 'redux/form.selectors'
import { sendFormDataToServer } from 'redux/reducers/actionCreator'
import { addAboutData } from 'redux/reducers/formSlice'
import { finalStep } from 'redux/reducers/stepperSlice'
import { aboutStepSchema } from 'schemas/aboutStepSchema'
import { AboutDataType } from 'types/steps.types'
import styles from './AboutStep.module.scss'

export const AboutStep = ({ navigate }: RegistrationStepsPropsTypes) => {
  const { container, formContainer, buttonsContainer } = styles
  const dispatch = useAppDispatch()
  const [modalSuccess, setModalSuccess] = useState(false)
  const [modalFail, setModalFail] = useState(false)
  const toggleModal = () => {
    setModalFail(!modalFail)
  }
  const initialText = useAppSelector(selectAbout)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AboutDataType>({
    resolver: zodResolver(aboutStepSchema),
    mode: 'onBlur',
    defaultValues: initialText,
    reValidateMode: 'onSubmit',
  })

  const onSubmit = (data: AboutDataType) => {
    dispatch(addAboutData(data))
    dispatch(finalStep())
    dispatch(sendFormDataToServer())
      .then(unwrapResult)
      .then((result) => {
        if (result.toString() === 'success') {
          setModalSuccess(!modalSuccess)
        } else {
          setModalFail(!modalFail)
        }
      })
  }

  return (
    <>
      <form className={container} onSubmit={handleSubmit(onSubmit)}>
        <div className={formContainer}>
          <AboutArea
            register={register}
            watch={watch}
            error={errors.about?.message}
          />
          <div className={buttonsContainer}>
            <NavButtonBack />
            <SendFormButton />
          </div>
        </div>
      </form>
      <ModalDone
        toggleModal={toggleModal}
        modal={modalSuccess}
        navigate={navigate}
      />
      <ModalFail
        toggleModal={toggleModal}
        modal={modalFail}
        navigate={navigate}
      />
    </>
  )
}
