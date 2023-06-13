import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Step2.module.scss'

export const Step2 = () => {
  const { container } = styles
  const navigate = useNavigate()
  return (
    <div className={container}>
      jopa
      <button onClick={() => navigate(-1)}>nazad</button>
    </div>
  )
}
