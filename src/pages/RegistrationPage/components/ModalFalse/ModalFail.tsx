import closeIcon from 'images/closeIcon.png'
import sendFail from 'images/sendFail.png'
import { ModalDoneTypes } from 'pages/RegistrationPage/components/ModalDone/modalDone.types'
import React from 'react'
import styles from './ModalFail.module.scss'

export const ModalFail = ({ toggleModal, modal }: ModalDoneTypes) => {
  const {
    modalContainer,
    overlay,
    modalContent,
    heading,
    failImage,
    closeButton,
    headBlock,
  } = styles

  return (
    <>
      {modal && (
        <div className={modalContainer}>
          <div className={overlay} />
          <div className={modalContent}>
            <div className={headBlock}>
              <div className={heading}>Ошибка</div>
              <div role="button" tabIndex={0} onClick={toggleModal}>
                <img src={closeIcon} alt="close" />
              </div>
            </div>
            <img src={sendFail} alt="success" className={failImage} />
            <button
              id="button-close"
              onClick={toggleModal}
              className={closeButton}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </>
  )
}
