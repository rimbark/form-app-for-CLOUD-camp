import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Step1.module.scss'

export const Step1 = () => {
  const { container } = styles
  const navigate = useNavigate()
  return (
    <div className={container}>
      jopa
      <button onClick={() => navigate(-1)}>nazad</button>
    </div>
  )
}
