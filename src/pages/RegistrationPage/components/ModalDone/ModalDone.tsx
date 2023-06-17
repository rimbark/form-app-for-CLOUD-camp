import sendSuccess from 'images/sendSuccess.png'
import { ToHomePageButton } from 'pages/RegistrationPage/components/FinalButtons/ToHomePageButton/ToHomePageButton'
import { ModalDoneTypes } from 'pages/RegistrationPage/components/ModalDone/modalDone.types'
import React from 'react'
import styles from './ModalDone.module.scss'

export const ModalDone = ({ modal }: ModalDoneTypes) => {
  const { modalContainer, overlay, modalContent, heading } = styles

  return (
    <>
      {modal && (
        <div className={modalContainer}>
          <div className={overlay} />
          <div className={modalContent}>
            <div className={heading}>Форма успешно отправлена</div>
            <img src={sendSuccess} alt="success" />
            <ToHomePageButton />
          </div>
        </div>
      )}
    </>
  )
}
